import React from 'react';
import "../public/styles/styles.css"
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import CustomRoutes from './CustomRoutes'; // where we are going to specify our routes

ReactDOM.render(
  <Router>
    <CustomRoutes />
  </Router>,
  document.getElementById('root')
);