import HomeButton from "../components/HomeButton"
import { Navigate, useNavigate } from "react-router-dom";
import DrawingArea from "../components/DrawingArea";
import NormalButton from "../components/NormalButton";
import { useEffect, useState } from "react";
import InputBar from "../components/InputBar";
import Prompt from "../components/Prompt";
import { changeAuthRender, getHeight } from "../utils/functions";
import BACKEND_LINK from "../links";
import InProgressScreen from "../components/InProgessScreen";

function Share() {

    const navigate = useNavigate();

    const [isFinishedWaiting, setIsFinishedWaiting] = useState(false);

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [region, setRegion] = useState('');

    const relativeSize = 8;
    const height = getHeight(1, relativeSize);
    const shareEndRoute='/success';
    const skipEndRoute='/end';

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

    
    function onShareClick() {
        // send request for video wall
        leavePage(shareEndRoute);
    };

    function onSkipClick() {
        leavePage(skipEndRoute);
    }

    function leavePage(endRoute) {
        navigate(endRoute);
    }

    if (isFinishedWaiting) {

        return <div>
            <Prompt text='Share your masterpiece with the world! ' relativeSize={relativeSize} height={height}/>
            <InputBar setterFunc={setName} placeholder='Optionally enter your name...' value={name}/>
            <InputBar setterFunc={setAge} placeholder='Age...' value={age}/>
            <InputBar setterFunc={setRegion} placeholder='And where you are from' value={region}/>
            <NormalButton text='Share' onClickFunc={onShareClick}/>
            <NormalButton text='Skip' onClickFunc={onSkipClick}/>
        </div>;

    } else {
        return <InProgressScreen />;
    }
}

export default Share;