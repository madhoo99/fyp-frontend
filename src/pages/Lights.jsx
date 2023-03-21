import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectButton from "../components/SelectButton";

function Lights() {


    const navigate = useNavigate();

    function onButtonClick(endRoute) {
        navigate(endRoute);
    };

    // var emojis = ["happy.png"]

    // var [emojisState, setEmojisState] = useState([false, false, false, false, false, false, false, false, false, false, false])

    // function renderEmojis(id) {
    //     newEmojisState = emojisState
    //     for elem in newEmojisState : 
    //         elem = false
    //     newEmojisState[id] = true
    //     setEmojisState(newEmojisState)


    // }

    // var lights = ["red", "maroon", "orange", "gold", "turquoise", "sea-green", "indigo", "blue", "navy-blue", "purple", "pink"];

    

    return <div>
        <p>Pick your light.</p>
        {/* {lights.map(light => <SelectButton key={light} onClickFunc={onButtonClick} endRoute="/Home" text={light} imageSrc="light-png.png" imageAlt={light + "_alt"} height={100} width={100}/>)} */}
        {emojisState.map(emoji, id => <Sticker default='red blue' id={id} renderFunc={renderEmojis} imageUrl={emojis[id]} />)}
        
    </div>
}

export default Lights;

// function SelectButton (props) {
//     return <button onClick={() => {props.onClickFunc(props.endRoute)}}>
//         <p>{props.text}</p>
//         <Image src={props.imageSrc} alt={props.imageAlt}/>
//     </button>
// }     