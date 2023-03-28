function Prompt(props) {
    return <div style={{textAlign: 'center', fontSize: String(props.relativeSize) + 'vmin', height: props.height}}>
        <p>{props.text}</p>
    </div>
}

export default Prompt;