import HomeButton from "../components/HomeButton"
import { Navigate, useNavigate } from "react-router-dom";
import DrawingArea from "../components/DrawingArea";
import NormalButton from "../components/NormalButton";
import Prompt from "../components/Prompt";
import getHeight from "../utils/functions";
import BACKEND_LINK from "../links";

function Home() {

    const navigate = useNavigate();

    const relativeSize = 8;
    const height = getHeight(1, relativeSize);
    const endRoute = '/name';

    function onButtonClick() {
        const url = new URL(window.location.href);
        fetch(BACKEND_LINK + '/start' + '?id=' + String(url.searchParams.get('id')), {
          method: 'GET',
        })
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.error(error);
          });
        navigate(endRoute);
    };

    return <div>
        <Prompt text='Welcome to Borderless' relativeSize={relativeSize} height={height}/>
        {/* <HomeButton onClickFunc={onButtonClick} endRoute="/Lights" text="Lights" imageSrc="light-png.png" imageAlt="templogo" width={100} height={100}/>
        <HomeButton onClickFunc={onButtonClick} endRoute="/Sounds" text="Sounds" imageSrc="sound-png.png" imageAlt="templogo" width={100} height={100}/> */}
        <NormalButton text='Start' onClickFunc={onButtonClick} />
    </div>;
}

export default Home;
