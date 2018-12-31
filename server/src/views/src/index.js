import React from 'react';
import { render } from 'react-dom';
import { Router} from "react-router-dom";
import History from './components/Routes/History';
import App from './components/app.jsx';
import './scss/font-awesome.scss' ;
import './scss/bootstrap.scss';
import './scss/mdb.scss';
import './scss/google-fonts.scss';

render(
<Router history={History}>
    <App />
</Router>
    , document.getElementById('root')
);