import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MyGoogleMap from './Components/MyGoogleMap';
import HomePage from './Components/HomePage';
import MapContainer from './Components/MapContainer';

ReactDOM.render(<HomePage />, document.getElementById('main'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
