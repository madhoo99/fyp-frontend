function NormalButton(props) {
    return <button onClick={() => {props.onClickFunc(props.endRoute)}}>
        <p>{props.text}</p>
    </button>
}

export default NormalButton;