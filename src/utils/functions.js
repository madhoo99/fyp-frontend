function getHeight(order, relativeSize){
    const windowSize = [window.innerWidth, window.innerHeight];
    if (order == 1) {
        return Math.ceil(relativeSize*windowSize[1]/100);
    }
    return Math.floor(relativeSize*windowSize[1]/100);
};


function changeAuthRender(response, setIsFinishedWaiting){
    console.log(response);
    // if no issues
    if (!response.message) {
        return;
    }
    setIsFinishedWaiting(true);
}

function changeAuthStateRender(response, setIsFinishedWaiting, setWaiting) {
    if (response.message) {
        console.log('render');
        setIsFinishedWaiting(true);
        return;
    }
    // waiting for other player
    if (response.error.code === 'E005') {
        console.log('waiting');
        setWaiting(true);
        return;
    }
    console.log('unauthorized');
    setWaiting(false);
}

export {getHeight, changeAuthRender, changeAuthStateRender};