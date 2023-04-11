import '../static/style.css'

function Timer(props) {
    return <div className='timer' style={{width: props.width, height:props.height, left: props.left, top: props.top}}>
        <img className='timer-ring' src='black-ring.png' width={props.width} height={props.height} style={{left: props.leftnumber, top: props.topring}}></img>
        <p className='timer-time' style={{position:'relative', left: props.leftnumber, top: props.topnumber}}>{props.time}</p>
    </div>
}

export default Timer;