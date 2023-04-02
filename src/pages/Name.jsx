import HomeButton from "../components/HomeButton"
import { Navigate, useNavigate } from "react-router-dom";
import DrawingArea from "../components/DrawingArea";
import NormalButton from "../components/NormalButton";
import Prompt from "../components/Prompt";
import { getHeight, changeAuthRender } from "../utils/functions";
import { useEffect, useState } from "react";
import InputBar from "../components/InputBar";
import WaitingScreen from "../components/WaitingScreen";
import InProgressScreen from "../components/InProgessScreen";
import BACKEND_LINK from "../links";

function Name() {

    const navigate = useNavigate();

    const [nickname, setNickname] = useState('');
    const [isFinishedWaiting, setIsFinishedWaiting] = useState(false);

    const relativeSize = 8;
    const height = getHeight(1, relativeSize);
    const endRoute = '/drawingPrompt';

    useEffect(() => 
    {
        const nameTimerInterval = setInterval(() => 
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

        return () => clearInterval(nameTimerInterval);
    }, [isFinishedWaiting]);

    function onEnterClick() {
        const data = {nickname: nickname};
        // send nickname
        fetch(BACKEND_LINK + '/nickname', {
          method: 'POST',
          body: JSON.stringify(data),
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
        navigate(endRoute);
    };

    if (isFinishedWaiting){

        return <div>
            <Prompt text='Enter your nickname' relativeSize={relativeSize} height={height}/>
            {/* <HomeButton onClickFunc={onButtonClick} endRoute="/Lights" text="Lights" imageSrc="light-png.png" imageAlt="templogo" width={100} height={100}/>
            <HomeButton onClickFunc={onButtonClick} endRoute="/Sounds" text="Sounds" imageSrc="sound-png.png" imageAlt="templogo" width={100} height={100}/> */}
            <InputBar setterFunc={setNickname} placeholder='subbu snacks' value={nickname}/>
            <NormalButton text='Enter' onClickFunc={onEnterClick} />
        </div>;

    } else {
        
        return <InProgressScreen />;

    }
}

export default Name;