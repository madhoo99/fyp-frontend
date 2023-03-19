import Image from "./Image";
import '../static/style.css'
import React, { useRef, useState } from 'react';

function Sticker (props) {

    var [isClicked, setIsClicked] = useState(false);


    function imClicked() {
        setIsClicked(true);
        props.renderFucn(props.id)
    };

    return <div style={{color : props.default}} onClick={() => {imClicked()}}>
        <image>

        </image>
    </div>
}     

export default Sticker;