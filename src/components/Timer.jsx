import '../static/style.css'

function Timer(props) {
    return <div className='timer' style={{width: props.width, height:props.height}}>
        <img className='timer-ring' src='black-ring.png' width={props.width} height={props.height}></img>
        <p className='timer-time'>{props.time}</p>
    </div>
}

export default Timer;