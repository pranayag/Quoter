import React, { Component } from 'react';
import './style.css';
import LoadingIndicator from './loader';
import button from '../assets/search-icon.png';
import random from '../assets/random.png';
import {trackPromise} from 'react-promise-tracker';


class Search extends Component {
    state = {  
        query: '' ,
        quote: '',
        author: '',
        loading: false,
    }

    handleChange = event => {
        this.setState({
            query: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        const check = this.state.query;
        let x = '';
        const url = 'https://quote-garden.herokuapp.com/quotes/search/'+check;
        trackPromise (
        fetch(url)
        .then(response => response.json())
        .then(data => this.setState({ query: check, quote:data.results[x=Math.floor(Math.random()*Math.floor(data.count))].quoteText, author:data.results[x].quoteAuthor}))
        .catch(e => console.log('error', e))
        );
    }

    render() {
        return ( 
            <div className='parent'>
                <form  onSubmit={this.handleSubmit}>
                    <div className='align'>
                        <input className='main' type="text" name="query" placeholder="keyword" value={this.state.query} onChange={this.handleChange} />
                        <button className='button'>
                            <img className='icon' src = {button} alt = "Search"/>
                        </button>
                    </div>
                </form>
                
                <div>
                    <div className="quote"> {this.state.quote} </div>
                    <div className="author"> {this.state.author} </div>
                </div>
            
                <button className='random' onClick={this.handleSubmit}> 
                    <img src = {random} alt="Random"/>
                </button>
            </div> 

        );
    }
}
 
export default Search;