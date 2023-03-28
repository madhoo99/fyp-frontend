import HomeButton from "../components/HomeButton"
import { Navigate, useNavigate } from "react-router-dom";
import DrawingArea from "../components/DrawingArea";
import NormalButton from "../components/NormalButton";
import Prompt from "../components/Prompt";
import { useRef, useState, useEffect } from 'react';
import EmojiPicker from "emoji-picker-react";
import TimedButton from "../components/TimedButton";

function Reaction() {

    const navigate = useNavigate();

    const windowSize = useRef([window.innerWidth, window.innerHeight]);

    const timeGiven = 5;

    const [time, setTime] = useState(timeGiven);
    const [isFinished, setIsFinished] = useState(false);
    const [isEmoji, setIsEmoji] = useState(false);

    const promptRelativeSize = 8;
    const endRoute = '/guessDrawing'

    useEffect(() => 
    {
        const timerInterval = setInterval(() => 
        {
            if (isFinished) {
                return;
            }
            setTime(time => time - 1);
            console.log(time)
            if (time == 0) {
                setIsFinished(true);
            }
        }
        , 1000);

        return () => clearInterval(timerInterval);
    }, [time, isFinished]);
      

    function getHeight(order, relativeSize){
        if (order == 1) {
            return Math.ceil(relativeSize*windowSize.current[1]/100);
        }
        return Math.floor(relativeSize*windowSize.current[1]/100);
    }


    function onEmojiButtonClick() {
        setIsEmoji(true);
    };

    function onTimedButtonClick() {
        if (!isFinished) {
            return;
        }

        navigate(endRoute);
        
    };

    function onEmojiClick(emojiData) {
        console.log(emojiData);
        const data = { emoji: emojiData.emoji };

        // fetch post to server emoji data
    }


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
}

export default Reaction;