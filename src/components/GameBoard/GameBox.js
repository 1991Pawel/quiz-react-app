import React from 'react';
import './GameBox.css'


const GameBox = ({data}) => data.map((el) => <div className="game-box" key={el} data-id={el}></div>)

 
export default GameBox;
