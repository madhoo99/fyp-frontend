import HomeButton from "../components/HomeButton"
import { Navigate, useNavigate } from "react-router-dom";
import DrawingArea from "../components/DrawingArea";
import NormalButton from "../components/NormalButton";
import Prompt from "../components/Prompt";
import { useRef, useState, useEffect } from 'react';
import EmojiPicker from "emoji-picker-react";
import TimedButton from "../components/TimedButton";
import { changeAuthStateRender, getHeight } from "../utils/functions";
import WaitingScreen from "../components/WaitingScreen";
import InProgressScreen from "../components/InProgessScreen";
import BACKEND_LINK from "../links";

function Reaction() {

    const navigate = useNavigate();

    const windowSize = useRef([window.innerWidth, window.innerHeight]);

    const [isFinishedWaiting, setIsFinishedWaiting] = useState(false);
    const [waiting, setWaiting] = useState(false); // false indiciates no access, true indicates waiting

    const timeGiven = 5;

    const [time, setTime] = useState(timeGiven);
    const [isFinishedTimeOut, setIsFinishedTimeOut] = useState(false);
    const [isEmoji, setIsEmoji] = useState(false);

    const promptRelativeSize = 8;
    const endRoute = '/guessDrawing'

    const state = 5;

    useEffect(() => 
    {
        const reactionTimerInterval = setInterval(() => 
        {
            if (isFinishedWaiting) {
                return;
            }
            fetch(BACKEND_LINK + '/authState' + '?state=' + String(state), {
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

        return () => clearInterval(reactionTimerInterval);
    }, [isFinishedWaiting, waiting]);
    
    useEffect(() => 
    {
        const timerInterval = setInterval(() => 
        {
            if (isFinishedTimeOut) {
                return;
            }
            setTime(time => time - 1);
            console.log(time)
            if (time == 0) {
                setIsFinishedTimeOut(true);
            }
        }
        , 1000);

        return () => clearInterval(timerInterval);
    }, [time, isFinishedTimeOut]);


    function onEmojiButtonClick() {
        setIsEmoji(true);
    };

    function onTimedButtonClick() {
        if (!isFinishedTimeOut) {
            return;
        }

        navigate(endRoute);
        
    };

    function onEmojiClick(emojiData) {
        console.log(emojiData);
        const data = { emoji: emojiData.emoji };

        // fetch post to server emoji data
        fetch(BACKEND_LINK + '/emoji', {
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
    }

    if (isFinishedWaiting) {

        if (isEmoji) {
            return <div>
                <EmojiPicker onEmojiClick={onEmojiClick}/>
                <TimedButton text='Advance' time={time} onClickFunc={onTimedButtonClick}/>
            </div>
        } else {
            return <div>
                <Prompt text={'Yay!\nDo you see your drawing on the mirror?'} relativeSize={promptRelativeSize} height={getHeight(1, promptRelativeSize)}/>
                <Prompt text={'React to the other user\'s drawing! Feel free to use gestures, facial expressions, or emojis.'} relativeSize={promptRelativeSize} height={getHeight(1, promptRelativeSize)}/>
                {/* <HomeButton onClickFunc={onButtonClick} endRoute="/Lights" text="Lights" imageSrc="light-png.png" imageAlt="templogo" width={100} height={100}/>
                <HomeButton onClickFunc={onButtonClick} endRoute="/Sounds" text="Sounds" imageSrc="sound-png.png" imageAlt="templogo" width={100} height={100}/> */}
                <NormalButton text='Choose an emoji' onClickFunc={onEmojiButtonClick} />
                <TimedButton text='Advance' time={time} onClickFunc={onTimedButtonClick}/>
            </div>;
        }

    } else {

        if (waiting) {
            return <WaitingScreen />;
        } else {
            return <InProgressScreen />;
        }

    }
}

export default Reaction;