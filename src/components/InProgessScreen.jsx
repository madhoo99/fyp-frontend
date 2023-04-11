import { getHeight } from "../utils/functions";
import Prompt from "./Prompt";

function InProgressScreen(props) {

    const relativeSize = 8;
    const height = getHeight(1, relativeSize);

    return <div>
        <Prompt fonttest="font-link-Heading" text='Game in progress ' relativeSize={relativeSize} height={height} width='80vw' left='10vw' top='20vh'/>
    </div>
}

export default InProgressScreen;