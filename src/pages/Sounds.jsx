import { useNavigate } from "react-router-dom";
import SelectButton from "../components/SelectButton";


function Sounds() {

    const navigate = useNavigate();

    function onButtonClick(endRoute) {
        navigate(endRoute);
    };


    var sounds = ["rising", "depressing", "blues", "rock", "fun", "zesty", "happy", "confused", "gay", "funny"];

    return <div>
        <p>Pick your sound.</p>
        {sounds.map(sound => <SelectButton key={sound} onClickFunc={onButtonClick} endRoute="/Home" text={sound} imageSrc="sound-png.png" imageAlt={sound + "_alt"} height={100} width={100}/>)}
        
    </div>
}

export default Sounds;