import getHeight from "../utils/functions";

function NoAccessScreen(props) {

    const relativeSize = 8;
    const height = getHeight(1, relativeSize);

    return <div>
        <Prompt text='No access to session ' relativeSize={relativeSize} height={height}/>
    </div>
}

export default NoAccessScreen;