import React from 'react';
import Home from './pages/Home';
import Lights from './pages/Lights';
import Sounds from './pages/Sounds';
import { Route, Routes} from 'react-router-dom';
import { Navigate } from "react-router-dom";

function CustomRoutes() {
return <div>
    <Routes>
    <Route exact path="/Home" element={<Home />} />
    {/* <Route exact path="/">
        <Navigate to="/Home" replace={true} />
    </Route> */}
    <Route exact path="/Lights" element={<Lights />} />
    <Route exact path="/Sounds" element={<Sounds />} />
    </Routes>
</div>
}

export default CustomRoutes;