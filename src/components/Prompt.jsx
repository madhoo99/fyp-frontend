import '../static/style.css';

function Prompt(props) {
    return <div style={{position:'absolute', margin: 'auto', textAlign: 'center', fontSize: String(props.relativeSize) + 'vmin', offset: props.offset, height: props.height, width: props.width, left: props.left, top: props.top}} className="prompt"> 
        <p className={props.fonttest}>{props.text}</p>
    </div>
}

export default Prompt;