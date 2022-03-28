import React from 'react';
import REACTDOM from 'react-dom';

import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"

// You'll need to wrap <App /> for routing to work

REACTDOM.render(
    <Router>
        <App/>
    </Router>

, document.getElementById('root')
)

/*
gives access to history , match and location 



*/