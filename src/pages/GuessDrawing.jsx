import HomeButton from "../components/HomeButton"
import { Navigate, useNavigate } from "react-router-dom";
import DrawingArea from "../components/DrawingArea";
import NormalButton from "../components/NormalButton";
import Prompt from "../components/Prompt";
import { changeAuthRender, getHeight } from "../utils/functions";
import { useEffect, useState } from "react";
import InProgressScreen from "../components/InProgessScreen";
import BACKEND_LINK from "../links";

function GuessDrawing() {

    const navigate = useNavigate();

    const [isFinishedWaiting, setIsFinishedWaiting] = useState(false);

    const [desc, setDesc] = useState('');
    const [descIsObtained, setDescIsObtained] = useState(false);

    const relativeSize = 8;
    const height = getHeight(1, relativeSize);
    const endRoute='/share';

    const state = 6;

    useEffect(() => 
    {
        const drawTimerInterval = setInterval(() => 
        {
            if (isFinishedWaiting) {
                return;
            }
            fetch(BACKEND_LINK + '/auth' + '?state=' + String(state), {
                method: 'GET',
                credentials: 'include'
            })
            .then(response => response.json())
            .then(response => {
                changeAuthRender(response, setIsFinishedWaiting);
            })
            .catch(error => {
                console.error(error);
            });
        }
        , 1000);

        return () => clearInterval(drawTimerInterval);
    }, [isFinishedWaiting]);

    useEffect(() => 
    {
        const getDescriptionInterval = setInterval(() => 
        {
            if (descIsObtained) {
                return;
            }
            fetch(BACKEND_LINK + '/guessDrawing', {
                method: 'GET',
                credentials: 'include'
            })
            .then(response => response.json())
            .then(response => {
                setDesc(response.description);
                setDescIsObtained(true);
            })
            .catch(error => {
                console.error(error);
            });
        }
        , 1000);

        return () => clearInterval(getDescriptionInterval);
    }, [descIsObtained]);

    function onButtonClick() {
        const url = new URL(window.location.href);
        navigate(endRoute, {state: {id: url.searchParams.get('id')}});
    };

    if (isFinishedWaiting) {
    
        return <div>
            <Prompt fonttest="font-link" text='The other person drew: ' relativeSize={relativeSize} height={height} width='80vw' left='10vw' top='10vh'/>
            <Prompt fonttest="font-link" text={desc} relativeSize={relativeSize} height={height} width='80vw' left='10vw' top='20vh'/>
            <Prompt fonttest="font-link" text='Did you figure out what the other person was drawing?' relativeSize={relativeSize} height={height} width='80vw' left='10vw' top='60vh'/>
            <NormalButton fonttest="font-link" className='btn btn-warning' text='Advance' onClickFunc={onButtonClick} width='20vw' left='40vw' top='70vh'/>
        </div>;

    } else {
        return <InProgressScreen />;
    }
}

export default GuessDrawing;
