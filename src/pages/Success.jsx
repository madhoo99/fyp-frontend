import HomeButton from "../components/HomeButton"
import { Navigate, useNavigate } from "react-router-dom";
import DrawingArea from "../components/DrawingArea";
import NormalButton from "../components/NormalButton";
import Prompt from "../components/Prompt";
import { changeAuthRender, getHeight } from "../utils/functions";
import { useEffect, useState } from "react";
import { Rating } from "@mui/material";
import InProgressScreen from "../components/InProgessScreen";
import BACKEND_LINK from "../links";

function Success() {

    const navigate = useNavigate();

    const [isFinishedWaiting, setIsFinishedWaiting] = useState(false);

    const [rating, setRating] = useState(2.5);

    const relativeSize = 8;
    const height = getHeight(1, relativeSize);
    const endRoute='/end';

    useEffect(() => 
    {
        const drawTimerInterval = setInterval(() => 
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

        return () => clearInterval(drawTimerInterval);
    }, [isFinishedWaiting]);

    function onRatingChange(newValue) {
        setRating(newValue);
    }

    function onFinishClick() {
        // post feedback to server
        const url = new URL(window.location.href);
        console.log(rating);
        navigate(endRoute, {state: {id: url.searchParams.get('id')}});
    };

    if (isFinishedWaiting) {

        return <div>
            <Prompt text='Success! ' relativeSize={relativeSize} height={height}/>
            <Prompt text='Try looking for your masterpiece on the archive wall! ' relativeSize={relativeSize} height={height}/>
            <Prompt text='Rate this experience' relativeSize={relativeSize} height={height}/>
            <Rating name="rating" onChange={(event, newValue) => {onRatingChange(newValue);}} defaultValue={rating}/>
            <NormalButton text='Finish' onClickFunc={onFinishClick}/>
        </div>;

    } else {
        return <InProgressScreen />;
    }
}

export default Success;
