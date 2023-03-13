import '../static/style.css'

function NormalButton(props) {
    return <button className='normal-button' onClick={() => {props.onClickFunc(props.endRoute)}}>
        <p>{props.text}</p>
    </button>
}

export default NormalButton;