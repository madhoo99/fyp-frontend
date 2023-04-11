import { getHeight } from "../utils/functions";
import Prompt from "./Prompt";

function WaitingScreen(props) {

    const relativeSize = 8;
    const height = getHeight(1, relativeSize);

    return <div>
        <Prompt fonttest="font-link-Heading" text='Waiting for other player ' relativeSize={relativeSize} height={height} width='80vw' left='10vw' top='20vh'/>
    </div>
}

export default WaitingScreen;