import getHeight from "../utils/functions";

function InProgressScreen(props) {

    const relativeSize = 8;
    const height = getHeight(1, relativeSize);

    return <div>
        <Prompt text='Game in progress ' relativeSize={relativeSize} height={height}/>
    </div>
}

export default InProgressScreen;