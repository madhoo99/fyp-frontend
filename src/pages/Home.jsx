import HomeButton from "../components/HomeButton"
import { Navigate, useNavigate } from "react-router-dom";
import DrawingArea from "../components/DrawingArea";

function Home() {

    const navigate = useNavigate();

    function onButtonClick(endRoute) {
        navigate(endRoute);
    };

    return <div>
        <h1>You can customize the lighting and sound as you see fit.</h1>
        {/* <HomeButton onClickFunc={onButtonClick} endRoute="/Lights" text="Lights" imageSrc="light-png.png" imageAlt="templogo" width={100} height={100}/>
        <HomeButton onClickFunc={onButtonClick} endRoute="/Sounds" text="Sounds" imageSrc="sound-png.png" imageAlt="templogo" width={100} height={100}/> */}
        <DrawingArea />
    </div>;
}

export default Home;
