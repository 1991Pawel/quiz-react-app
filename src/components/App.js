import React, { Component } from 'react';
import './App.css';
import GameBoard from './GameBoard/GameBoard'
import {itemsDataId as items} from '../data.js';






class App extends Component {

  state = {
   gameSettings :{
    time: 60,
    live: 3,
    score: 0,
   },

   gameData: {
     data : [...items]

   }


  };




  render() {

    return (
      <>
      <GameBoard data={items} />
      </>
    )
  }
  
}

export default App;


