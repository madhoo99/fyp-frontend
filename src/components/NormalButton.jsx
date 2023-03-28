import '../static/style.css'

function NormalButton(props) {
    return <button className='normal-button' onClick={() => 
        {
            if (props.endRoute) {
                props.onClickFunc(props.endRoute);
            } else {
                props.onClickFunc();
            }
        }
    }>
        <p>{props.text}</p>
    </button>
}

export default NormalButton;