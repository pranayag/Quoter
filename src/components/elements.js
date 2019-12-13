import React, { Component } from 'react';
import './style.css';
import top from '../assets/top-element.png';
import bottom from '../assets/bottom-element.png';

class Elements extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="elements">
                <div className="top-element">
                    <img src={top} alt="top element"/>
                </div>
                <div className="bottom-element">
                    <img src={bottom} alt="bottom element"/>
                </div>
            </div>

         );
    }
}
 
export default Elements;