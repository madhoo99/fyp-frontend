import Image from "./Image";
import '../static/style.css'

function SelectButton (props) {
    return <button className='select-button' onClick={() => {props.onClickFunc(props.endRoute)}}>
        <p>{props.text}</p>
        <Image src={props.imageSrc} alt={props.imageAlt} height={props.height} width={props.width}/>
    </button>
}     

export default SelectButton;