import HomeButton from "../components/HomeButton"
import { Navigate, useNavigate } from "react-router-dom";
import DrawingArea from "../components/DrawingArea";
import NormalButton from "../components/NormalButton";
import Prompt from "../components/Prompt";
import { changeAuthRender, getHeight } from "../utils/functions";
import { useEffect, useState } from "react";
import InProgressScreen from "../components/InProgessScreen";
import BACKEND_LINK from "../links";

function End() {

    const navigate = useNavigate();

    const [isFinishedWaiting, setIsFinishedWaiting] = useState(false);

    const [desc, setDesc] = useState('');

    const relativeSize = 8;
    const height = getHeight(1, relativeSize);
    const endRoute='/home';

    useEffect(() => 
    {
        const drawTimerInterval = setInterval(() => 
        {
            if (isFinishedWaiting) {
                return;
            }
            fetch(BACKEND_LINK + '/auth', {
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
    
    function onEndClick() {
        const url = new URL(window.location.href);
        // post request to reset game
        fetch(BACKEND_LINK + '/end', {
            method: 'POST',
            credentials: 'include',
            //body: 'testing',
            headers: {
              'Content-Type': 'application/json'
            }
        })
        .then(response => {
        console.log(response);
        })
        .catch(error => {
        console.error(error);
        });
        navigate(endRoute, {state: {id: url.searchParams.get('id')}});
    };

    if (isFinishedWaiting) {

        return <div>
            <Prompt text='Thank you for playing! ' relativeSize={relativeSize} height={height}/>
            <NormalButton text='End' onClickFunc={onEndClick}/>
        </div>;

    } else {
        return <InProgressScreen />;
    }
}

export default End;