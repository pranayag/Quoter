import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {usePromiseTracker} from 'react-promise-tracker';
import Loader from 'react-loader-spinner';
import * as serviceWorker from './serviceWorker';

const LoadingIndicator = props => {
    const { promiseInProgress } = usePromiseTracker();

    return (
        promiseInProgress && 
        <div
            style={{
        width: "100%",
        height: "100",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
            <Loader type="MutatingDots" color="#ff7b00" height="100" width="100" />
        </div>
        
    )
}

ReactDOM.render(
    <div>
    <LoadingIndicator />
    <App />
    </div>
    , document.getElementById('root'));

serviceWorker.unregister();
