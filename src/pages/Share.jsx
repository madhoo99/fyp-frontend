import HomeButton from "../components/HomeButton"
import { Navigate, useNavigate } from "react-router-dom";
import DrawingArea from "../components/DrawingArea";
import NormalButton from "../components/NormalButton";
import { useState } from "react";
import InputBar from "../components/InputBar";
import Prompt from "../components/Prompt";
import getHeight from "../utils/functions";

function Share() {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [region, setRegion] = useState('');

    const relativeSize = 8;
    const height = getHeight(1, relativeSize);
    const shareEndRoute='/success';
    const skipEndRoute='/end';
    
    function onShareClick() {
        // send request for video wall
        leavePage(shareEndRoute);
    };

    function onSkipClick() {
        leavePage(skipEndRoute);
    }

    function leavePage(endRoute) {
        const url = new URL(window.location.href);
        navigate(endRoute, {state: {id: url.searchParams.get('id')}});
    }

    return <div>
        <Prompt text='Share your masterpiece with the world! ' relativeSize={relativeSize} height={height}/>
        <InputBar setterFunc={setName} placeholder='Optionally enter your name...' value={name}/>
        <InputBar setterFunc={setAge} placeholder='Age...' value={age}/>
        <InputBar setterFunc={setRegion} placeholder='And where you are from' value={region}/>
        <NormalButton text='Share' onClickFunc={onShareClick}/>
        <NormalButton text='Skip' onClickFunc={onSkipClick}/>
    </div>;
}

export default Share;