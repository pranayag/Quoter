import React, { Component } from 'react';
import {usePromiseTracker} from 'react-promise-tracker';
import Loader from 'react-loader-spinner';

const LoadingIndicator = props => {
    const { promiseInProgress } = usePromiseTracker();
    
    this.state = {
        status: false,
    };
  
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

