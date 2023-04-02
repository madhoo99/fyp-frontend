import HomeButton from "../components/HomeButton"
import { Navigate, useNavigate } from "react-router-dom";
import DrawingArea from "../components/DrawingArea";
import { useEffect, useRef, useState } from 'react';
import SmallPrompt from "../components/SmallPrompt";
import Prompt from "../components/Prompt";
import Image from "../components/Image";
import NormalButton from "../components/NormalButton";
import InputBar from "../components/InputBar";
import {useLocation} from 'react-router-dom';
import { changeAuthRender, getHeight } from '../utils/functions';
import InProgressScreen from "../components/InProgessScreen";
import BACKEND_LINK from "../links";

function Draw() {

    const navigate = useNavigate();

    const windowSize = useRef([window.innerWidth, window.innerHeight]);

    const [isFinishedWaiting, setIsFinishedWaiting] = useState(false);

    const canvasRef = useRef(null);
    const [isDescription, setIsDescription] = useState(false);
    const [imageSrc, setImageSrc] = useState(null)
    const [descStr, setDescStr] = useState('')
    const promptRelativeSize = 8;
    const smallPromptRelativeSize = 4;
    const drawingRelativeSize = 90;
    const endRoute = '/reaction';
    const showText = 'Show';

    const location = useLocation();

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

    function onButtonClick(endRoute) {
        navigate(endRoute);
    };

    function getImageURL(canvas, setImageSrc) {
        const dataUrl = canvas.toDataURL();
        setImageSrc(dataUrl);
        setIsDescription(true);
        return dataUrl;
    }

    function handleSave() {
        //const canvas = canvasRef.current;
        //const dataUrl = canvas.toDataURL();
        const data = { image: imageSrc, description: descStr };
        console.log(data)
        console.log(location.state.id)
    
        // Send the data to the server using fetch or an AJAX request
        fetch('http://localhost:8000/save', {
          method: 'POST',
          body: JSON.stringify(data),
          credentials: 'include',
          //body: 'testing',
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.error(error);
          });
    
        navigate(endRoute);
    }

    if (isFinishedWaiting) {

      if (isDescription) {
          return <div>
              <Prompt text={'Wow! Are you an artist?'} relativeSize={promptRelativeSize} height={getHeight(1, promptRelativeSize)}/>
              <Image src={imageSrc} alt='light-png.png' height={400} width={400}/>
              <Prompt text={'Enter a description for your artwork'} relativeSize={promptRelativeSize} height={getHeight(1, promptRelativeSize)}/>
              <InputBar setterFunc={setDescStr} placeholder="Enter Description" value={descStr} />
              <NormalButton text={showText} onClickFunc={handleSave} />
          </div>
      } else {
      
          return <div>
              <SmallPrompt text={'Draw something that reminds you of your childhood.'} relativeSize={smallPromptRelativeSize} height={getHeight(1, smallPromptRelativeSize)}/>
              {/* <HomeButton onClickFunc={onButtonClick} endRoute="/Lights" text="Lights" imageSrc="light-png.png" imageAlt="templogo" width={100} height={100}/>
              <HomeButton onClickFunc={onButtonClick} endRoute="/Sounds" text="Sounds" imageSrc="sound-png.png" imageAlt="templogo" width={100} height={100}/> */}
              <DrawingArea setImageSrcFunc={setImageSrc} getImageURLFunc={getImageURL} height={getHeight(2, drawingRelativeSize)} width={windowSize.current[0]} lineWidth={10} startPos={getHeight(1, smallPromptRelativeSize) + 1} canvasRef={canvasRef}/>
          </div>;
      }

  } else {

    return <InProgressScreen />;

  }
}

export default Draw;