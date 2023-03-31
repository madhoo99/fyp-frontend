import React from 'react';
import Home from './pages/Home';
// import Lights from './pages/Lights';
import Sounds from './pages/Sounds';
import Draw from './pages/Draw';
import { Route, Routes} from 'react-router-dom';
import { Navigate } from "react-router-dom";
import Reaction from './pages/Reaction';
import GuessDrawing from './pages/GuessDrawing';
import Share from './pages/Share';
import Success from './pages/Success';
import End from './pages/End';
import DrawingPrompt from './pages/DrawingPrompt';
import Name from './pages/Name';

function CustomRoutes() {
return <div>
    <Routes>
    <Route exact path="/home" element={<Home />} />
    <Route exact path="/name" element={<Name />} />
    <Route exact path="/drawingPrompt" element={<DrawingPrompt />} />
    <Route exact path="/draw" element={<Draw />} />
    {/* <Route exact path="/">
        <Navigate to="/Home" replace={true} />
    </Route> */}
    {/* <Route exact path="/lights" element={<Lights />} /> */}
    <Route exact path="/sounds" element={<Sounds />} />
    <Route exact path="/reaction" element={<Reaction />} />
    <Route exact path="/guessDrawing" element={<GuessDrawing />} />
    <Route exact path="/share" element={<Share />} />
    <Route exact path="/success" element={<Success />} />
    <Route exact path="/end" element={<End />} />
    </Routes>
</div>
}

export default CustomRoutes;