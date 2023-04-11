

function SmallPrompt(props) {
    return <div style={{textAlign: 'center', fontSize: String(props.relativeSize) + 'vmin', height: props.height, width: props.width, left: props.left, top: props.top}}>
        <p className={props.fonttest}>{props.text}</p>
    </div>
}

export default SmallPrompt;