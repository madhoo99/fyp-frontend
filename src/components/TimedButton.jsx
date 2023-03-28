import '../static/style.css'
import Timer from './Timer';

function TimedButton(props) {
    return <div className='timed-button' onClick={() => 
        {
            if (props.endRoute) {
                props.onClickFunc(props.endRoute);
            } else {
                props.onClickFunc();
            }
        }
    }>
        <p>{props.text}</p>
        <Timer time={props.time} width={100} height={100}/>
    </div>
}

export default TimedButton;