import HomeButton from "../components/HomeButton"
import { Navigate, useNavigate } from "react-router-dom";
import DrawingArea from "../components/DrawingArea";

function Draw() {

    const navigate = useNavigate();

    function onButtonClick(endRoute) {
        navigate(endRoute);
    };

    return <div>
        <h1>Draw something that reminds you of your childhood.</h1>
        {/* <HomeButton onClickFunc={onButtonClick} endRoute="/Lights" text="Lights" imageSrc="light-png.png" imageAlt="templogo" width={100} height={100}/>
        <HomeButton onClickFunc={onButtonClick} endRoute="/Sounds" text="Sounds" imageSrc="sound-png.png" imageAlt="templogo" width={100} height={100}/> */}
        <DrawingArea endRoute={'/drawQR'} height={800} width={400} />
    </div>;
}

export default Draw;