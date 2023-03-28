function InputBar(props) {
    return <div>
        <input onChange={(event) => {props.setterFunc(event.target.value)}} placeholder={props.placeholder} value={props.value} />
    </div>
}

export default InputBar;