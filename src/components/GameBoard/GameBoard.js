import React from 'react';
import './GameBoard.css'

import GameBox from './GameBox'


const itemsDataId = [
'data-id-1',
'data-id-2',
'data-id-3',
'data-id-4',
'data-id-5',
'data-id-6',
'data-id-7',
'data-id-8',
'data-id-9',
'data-id-10',
'data-id-11',
'data-id-12',
'data-id-13',
'data-id-14',
'data-id-15',
'data-id-16',
'data-id-17',
'data-id-18',
'data-id-19',
'data-id-20',
'data-id-21',
'data-id-22',
'data-id-23',
'data-id-24',
'data-id-25',
]


const GameBoard  = () => {

    
   return ( 
        <>
        <section className="game-board__wrapper">
        <GameBox data={itemsDataId}/>
        </section>

        </>
     );
}
 
export default GameBoard;