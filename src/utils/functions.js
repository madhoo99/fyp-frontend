function getHeight(order, relativeSize){
    const windowSize = [window.innerWidth, window.innerHeight];
    if (order == 1) {
        return Math.ceil(relativeSize*windowSize[1]/100);
    }
    return Math.floor(relativeSize*windowSize[1]/100);
};


export default getHeight;