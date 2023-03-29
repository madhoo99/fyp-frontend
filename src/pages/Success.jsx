import HomeButton from "../components/HomeButton"
import { Navigate, useNavigate } from "react-router-dom";
import DrawingArea from "../components/DrawingArea";
import NormalButton from "../components/NormalButton";
import Prompt from "../components/Prompt";
import getHeight from "../utils/functions";
import { useState } from "react";
import { Rating } from "@mui/material";

function Success() {

    const navigate = useNavigate();

    const [rating, setRating] = useState(2.5);

    const relativeSize = 8;
    const height = getHeight(1, relativeSize);
    const endRoute='/end';

    function onRatingChange(newValue) {
        setRating(newValue);
    }

    function onFinishClick() {
        // post feedback to server
        const url = new URL(window.location.href);
        console.log(rating);
        navigate(endRoute, {state: {id: url.searchParams.get('id')}});
    };

    return <div>
        <Prompt text='Success! ' relativeSize={relativeSize} height={height}/>
        <Prompt text='Try looking for your masterpiece on the archive wall! ' relativeSize={relativeSize} height={height}/>
        <Prompt text='Rate this experience' relativeSize={relativeSize} height={height}/>
        <Rating name="rating" onChange={(event, newValue) => {onRatingChange(newValue);}} defaultValue={rating}/>
        <NormalButton text='Finish' onClickFunc={onFinishClick}/>
    </div>;
}

export default Success;
