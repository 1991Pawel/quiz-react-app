import React, { Component } from 'react';
import './App.css';
import GameBoard from './GameBoard/GameBoard'




class App extends Component {

  state = {
    time: 60,
    live: 3,
    score: 0,
  };


  render() {

    return (
      <>
      <GameBoard/>
      </>
    )
  }
  
}

export default App;


