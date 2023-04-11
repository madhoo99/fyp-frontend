import '../static/style.css'

function NormalButton(props) {

    return <button type="button" className={props.className} style={{position:'absolute', width: props.width, height: props.height, left: props.left, top: props.top}} onClick={() => 
        {
            if (props.endRoute) {
                props.onClickFunc(props.endRoute);
            } else {
                props.onClickFunc();
            }
        }   
    }>
        <p className={props.fonttest}>{props.text}</p>

    </button>
}

export default NormalButton;