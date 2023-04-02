import { getHeight } from "../utils/functions";
import Prompt from "./Prompt";

function WaitingScreen(props) {

    const relativeSize = 8;
    const height = getHeight(1, relativeSize);

    return <div>
        <Prompt text='Waiting for other player ' relativeSize={relativeSize} height={height}/>
    </div>
}

export default WaitingScreen;