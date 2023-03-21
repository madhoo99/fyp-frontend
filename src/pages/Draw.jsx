import HomeButton from "../components/HomeButton"
import { Navigate, useNavigate } from "react-router-dom";
import DrawingArea from "../components/DrawingArea";
import { useRef } from 'react';
import SmallPrompt from "../components/SmallPrompt";

function Draw() {

    const navigate = useNavigate();

    const windowSize = useRef([window.innerWidth, window.innerHeight]);

    const promptRelativeSize = 4
    const drawingRelativeSize = 90

    function onButtonClick(endRoute) {
        navigate(endRoute);
    };

    function getHeight(order, relativeSize){
        if (order == 1) {
            return Math.ceil(relativeSize*windowSize.current[1]/100);
        }
        return Math.floor(relativeSize*windowSize.current[1]/100);
    }

    return <div>
        <SmallPrompt text={'Draw something that reminds you of your childhood.'} relativeSize={promptRelativeSize} height={getHeight(1, promptRelativeSize)}/>
        {/* <HomeButton onClickFunc={onButtonClick} endRoute="/Lights" text="Lights" imageSrc="light-png.png" imageAlt="templogo" width={100} height={100}/>
        <HomeButton onClickFunc={onButtonClick} endRoute="/Sounds" text="Sounds" imageSrc="sound-png.png" imageAlt="templogo" width={100} height={100}/> */}
        <DrawingArea endRoute={'/drawQR'} height={getHeight(2, drawingRelativeSize)} width={windowSize.current[0]} lineWidth={10} startPos={getHeight(1, promptRelativeSize) + 1}/>
    </div>;
}

export default Draw;