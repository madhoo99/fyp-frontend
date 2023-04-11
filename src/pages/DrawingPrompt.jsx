import HomeButton from "../components/HomeButton"
import { Navigate, useNavigate } from "react-router-dom";
import DrawingArea from "../components/DrawingArea";
import NormalButton from "../components/NormalButton";
import WaitingScreen from "../components/WaitingScreen";
import NoAccessScreen from "../components/NoAccessScreen";
import { useEffect, useState } from "react";
import BACKEND_LINK from "../links";
import InProgressScreen from "../components/InProgessScreen";
import { changeAuthStateRender } from "../utils/functions";
import Prompt from "../components/Prompt";
import { getHeight, changeAuthRender } from "../utils/functions";

function DrawingPrompt() {

    const navigate = useNavigate();

    const [isFinishedWaiting, setIsFinishedWaiting] = useState(false);
    const [waiting, setWaiting] = useState(false); // false indiciates no access, true indicates waiting

    const relativeSize = 4;
    const height = getHeight(1, relativeSize);

    useEffect(() => 
    {
        const drawingPromptTimerInterval = setInterval(() => 
        {
            if (isFinishedWaiting) {
                return;
            }
            fetch(BACKEND_LINK + '/authState', {
                method: 'GET',
                credentials: 'include'
            })
            .then(response => response.json())
            .then(response => {
                // if no issues
                changeAuthStateRender(response, setIsFinishedWaiting, setWaiting);
            })
            .catch(error => {
                console.error(error);
            });
        }
        , 1000);

        return () => clearInterval(drawingPromptTimerInterval);
    }, [isFinishedWaiting, waiting]);

    function onButtonClick(endRoute) {
        const url = new URL(window.location.href);
        navigate(endRoute, {state: {id: url.searchParams.get('id')}});
    };

    if (isFinishedWaiting) {
        return <div>
            <div style={{
          width: '200px',
          height: '100px'
        }}></div>

            <Prompt fonttest="font-link-Heading" text='Draw something that reminds you of your childhood' relativeSize={relativeSize} height={height} width='95vw'/>
            {/* <HomeButton onClickFunc={onButtonClick} endRoute="/Lights" text="Lights" imageSrc="light-png.png" imageAlt="templogo" width={100} height={100}/>
            <HomeButton onClickFunc={onButtonClick} endRoute="/Sounds" text="Sounds" imageSrc="sound-png.png" imageAlt="templogo" width={100} height={100}/> */}
            <NormalButton fonttest="font-link" className='btn btn-warning' text='Draw' onClickFunc={onButtonClick} endRoute='/draw' width='20vw' height='5vh' left='40vw' top='35vh' />
        </div>;

    } else {

        if (true) {
            return <WaitingScreen />;
        } else {
            return <InProgressScreen />;
        }

    }
}

export default DrawingPrompt;
