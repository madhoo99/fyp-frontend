import HomeButton from "../components/HomeButton"
import { Navigate, useNavigate } from "react-router-dom";
import DrawingArea from "../components/DrawingArea";
import { useRef } from 'react';

function Draw() {

    const navigate = useNavigate();

    const windowSize = useRef([window.innerWidth, window.innerHeight]);

    function onButtonClick(endRoute) {
        navigate(endRoute);
    };

    return <div>
        <h1>Draw something that reminds you of your childhood.</h1>
        {/* <HomeButton onClickFunc={onButtonClick} endRoute="/Lights" text="Lights" imageSrc="light-png.png" imageAlt="templogo" width={100} height={100}/>
        <HomeButton onClickFunc={onButtonClick} endRoute="/Sounds" text="Sounds" imageSrc="sound-png.png" imageAlt="templogo" width={100} height={100}/> */}
        <DrawingArea endRoute={'/drawQR'} height={400} width={windowSize.current[0]} />
    </div>;
}

export default Draw;