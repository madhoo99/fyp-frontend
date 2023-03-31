import HomeButton from "../components/HomeButton"
import { Navigate, useNavigate } from "react-router-dom";
import DrawingArea from "../components/DrawingArea";
import NormalButton from "../components/NormalButton";
import Prompt from "../components/Prompt";
import getHeight from "../utils/functions";
import { useState } from "react";
import InputBar from "../components/InputBar";

function Name() {

    const navigate = useNavigate();

    const [nickname, setNickname] = useState('');

    const relativeSize = 8;
    const height = getHeight(1, relativeSize);
    const endRoute = '/drawingPrompt';

    function onEnterClick() {
        // send nickname
        const url = new URL(window.location.href);
        navigate(endRoute, {state: {id: url.searchParams.get('id')}});
    };

    return <div>
        <Prompt text='Enter your nickname' relativeSize={relativeSize} height={height}/>
        {/* <HomeButton onClickFunc={onButtonClick} endRoute="/Lights" text="Lights" imageSrc="light-png.png" imageAlt="templogo" width={100} height={100}/>
        <HomeButton onClickFunc={onButtonClick} endRoute="/Sounds" text="Sounds" imageSrc="sound-png.png" imageAlt="templogo" width={100} height={100}/> */}
        <InputBar setterFunc={setNickname} placeholder='subbu snacks' value={nickname}/>
        <NormalButton text='Enter' onClickFunc={onEnterClick} />
    </div>;
}

export default Name;