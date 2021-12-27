import './App.css';

import NavBar from './components/NavBar/NavBar';

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <div className='body' onClick={this.closeSubMenu}>
            <div className='product'>
                <div className='images'>
                    <img id='circle' src='./images/circle_anim.gif' alt='animated circle'/>
                    <img id='prod' src='./images/scooty.png' alt='product'/>
                </div>
            </div>
            <div className='info' onClick={this.closeSubMenu}>
                <span className='headline'>A neat headline comes here !</span>
                <span className='description'>A neat sample text to come here super soon. Till then admire the authentic and delightful User Interface Design of the Website. We are glad you came here, thanks for visiting.</span>
                <button className='details'><a href='/'>Show Details</a></button>
            </div>
        </div>
      </div>
    );
  }
}