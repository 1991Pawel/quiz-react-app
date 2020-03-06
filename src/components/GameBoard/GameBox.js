import React from 'react';
import './GameBox.css'


const GameBox = ({data}) => data.map((item) => <div className="game-box" key={item.Id} data-id={item.Id} data-is-active={item.isActive}></div>)

 
export default GameBox;
