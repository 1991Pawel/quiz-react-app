import React from 'react';
import './GameBoard.css'
import GameBox from './GameBox'


const GameBoard  = ({data}) => {

    
   return ( 
        <>
        <section className="game-board__wrapper">
        <GameBox data={data}/>
        </section>

        </>
     );
}
 
export default GameBoard;