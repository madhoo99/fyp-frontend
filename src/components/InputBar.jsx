function InputBar(props) {
    return <div>
        <input onChange={(event) => {props.setterFunc(event.target.value)}} placeholder={props.placeholder} value={props.value} style={{position:'absolute', width: props.width, height: props.height, left: props.left, top: props.top}}  />
    </div>
}

export default InputBar;