import HomeButton from "../components/HomeButton"
import { Navigate, useNavigate } from "react-router-dom";
import DrawingArea from "../components/DrawingArea";
import NormalButton from "../components/NormalButton";
import WaitingScreen from "../components/WaitingScreen";
import NoAccessScreen from "../components/NoAccessScreen";
import { useEffect, useState } from "react";
import BACKEND_LINK from "../links";
import InProgressScreen from "../components/InProgessScreen";

function DrawingPrompt() {

    const navigate = useNavigate();

    const [isFinishedWaiting, setIsFinishedWaiting] = useState(false);
    const [waiting, setWaiting] = useState(false); // false indiciates no access, true indicates waiting

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
                if (response.message) {
                    console.log('render');
                    setIsFinishedWaiting(true);
                    return;
                }
                // waiting for other player
                if (response.error.code === 'E005') {
                    console.log('waiting');
                    setWaiting(true);
                    return;
                }
                console.log('unauthorized');
                setWaiting(false);
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
            <h1>Draw something that reminds you of your childhood</h1>
            {/* <HomeButton onClickFunc={onButtonClick} endRoute="/Lights" text="Lights" imageSrc="light-png.png" imageAlt="templogo" width={100} height={100}/>
            <HomeButton onClickFunc={onButtonClick} endRoute="/Sounds" text="Sounds" imageSrc="sound-png.png" imageAlt="templogo" width={100} height={100}/> */}
            <NormalButton text='Draw' onClickFunc={onButtonClick} endRoute='/draw' />
        </div>;

    } else {

        if (waiting) {
            return <WaitingScreen />;
        } else {
            return <InProgressScreen />;
        }

    }
}

export default DrawingPrompt;
