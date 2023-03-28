import HomeButton from "../components/HomeButton"
import { Navigate, useNavigate } from "react-router-dom";
import DrawingArea from "../components/DrawingArea";
import NormalButton from "../components/NormalButton";

function Home() {

    const navigate = useNavigate();

    function onButtonClick(endRoute) {
        const url = new URL(window.location.href);
        navigate(endRoute, {state: {id: url.searchParams.get('id')}});
    };

    return <div>
        <h1>Draw something that reminds you of your childhood</h1>
        {/* <HomeButton onClickFunc={onButtonClick} endRoute="/Lights" text="Lights" imageSrc="light-png.png" imageAlt="templogo" width={100} height={100}/>
        <HomeButton onClickFunc={onButtonClick} endRoute="/Sounds" text="Sounds" imageSrc="sound-png.png" imageAlt="templogo" width={100} height={100}/> */}
        <NormalButton text='Draw' onClickFunc={onButtonClick} endRoute='/draw' />
    </div>;
}

export default Home;
