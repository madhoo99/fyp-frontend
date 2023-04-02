import HomeButton from "../components/HomeButton"
import { Navigate, useNavigate } from "react-router-dom";
import DrawingArea from "../components/DrawingArea";
import NormalButton from "../components/NormalButton";
import Prompt from "../components/Prompt";
import { getHeight } from "../utils/functions";
import { useState } from "react";

function End() {

    const navigate = useNavigate();

    const [desc, setDesc] = useState('');

    const relativeSize = 8;
    const height = getHeight(1, relativeSize);
    const endRoute='/home';
    
    function onEndClick() {
        const url = new URL(window.location.href);
        navigate(endRoute, {state: {id: url.searchParams.get('id')}});
    };

    return <div>
        <Prompt text='Thank you for playing! ' relativeSize={relativeSize} height={height}/>
        <NormalButton text='End' onClickFunc={onEndClick}/>
    </div>;
}

export default End;