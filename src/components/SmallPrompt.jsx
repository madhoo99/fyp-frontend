

function SmallPrompt(props) {
    return <div style={{textAlign: 'center', fontSize: props.relativeSize + 'vmin'}}>
        <p>{props.text}</p>
    </div>
}

export default SmallPrompt;