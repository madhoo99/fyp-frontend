import '../static/style.css'
import Timer from './Timer';

function TimedButton(props) {
    return <div style={{borderRadius: props.radius, backgroundColor:props.color, position:'absolute', margin: 'auto', textAlign: 'center', fontSize: String(props.relativeSize) + 'vmin', height: props.height,  width: props.width, left: props.left, top: props.top}} className='timed-button' onClick={() => 
        {
            if (props.endRoute) {
                props.onClickFunc(props.endRoute);
            } else {
                props.onClickFunc();
            }
        }
    }>
        <p className={props.fonttest} style={{position:'relative', left: props.leftInnerText, top: props.topInnerText}} >{props.text}</p>
        <Timer time={props.time} leftnumber='0vw' topring='0vh' topnumber='0.5vh' width={35} height={35} left='23vw' top='-2.5vh'/>
    </div>
}

export default TimedButton;