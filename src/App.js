import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/main.css'
import anime from 'lib/anime.es.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <svg id="morph" width="100%" height="100%" viewBox="0 0 1920 1080" preserveAspectRatio="none" >
          
          <path id="morphFull" class="a" d="M.1,1080h1920L1919.978-.18.1,0Z" transform="translate(0.404 0.68)"/>
        </svg>


      </div>
    );
  }
}

export default App;
