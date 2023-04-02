import HomeButton from "../components/HomeButton"
import { Navigate, useNavigate } from "react-router-dom";
import DrawingArea from "../components/DrawingArea";
import NormalButton from "../components/NormalButton";
import Prompt from "../components/Prompt";
import { getHeight } from "../utils/functions";
import { useState } from "react";

function GuessDrawing() {

    const navigate = useNavigate();

    const [desc, setDesc] = useState('');

    const relativeSize = 8;
    const height = getHeight(1, relativeSize);
    const endRoute='/share';
    
    function onButtonClick() {
        const url = new URL(window.location.href);
        navigate(endRoute, {state: {id: url.searchParams.get('id')}});
    };

    return <div>
        <Prompt text='The other person drew: ' relativeSize={relativeSize} height={height}/>
        <Prompt text={desc} relativeSize={relativeSize} height={height}/>
        <Prompt text='Did you figure out what the other person was drawing?' relativeSize={relativeSize} height={height}/>
        <NormalButton text='Advance' onClickFunc={onButtonClick}/>
    </div>;
}

export default GuessDrawing;
