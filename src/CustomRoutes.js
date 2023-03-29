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

function CustomRoutes() {
return <div>
    <Routes>
    <Route exact path="/home" element={<Home />} />
    <Route exact path="/draw" element={<Draw />} />
    {/* <Route exact path="/">
        <Navigate to="/Home" replace={true} />
    </Route> */}
    {/* <Route exact path="/lights" element={<Lights />} /> */}
    <Route exact path="/sounds" element={<Sounds />} />
    <Route exact path="/reaction" element={<Reaction />} />
    <Route exact path="/guessDrawing" element={<GuessDrawing />} />
    <Route exact path="/share" element={<Share />} />
    </Routes>
</div>
}

export default CustomRoutes;