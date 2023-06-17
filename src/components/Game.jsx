import React, { useState } from 'react'
//import { calculateWinner } from '../Helper'


import { Board } from './Board'
import { findWinner } from './WinnerFunction'

export const Game = () => {
    const [board,setBoard] = useState(Array(9).fill(null))
    const [xIsNext,setXisNext] = useState(true);
    const winner = findWinner(board);
    const handleClick = (idx) => {
        const boardCopy = [...board];
        //if user clicked on occupied square or game is over
        if(winner || boardCopy[idx]) return ; 
        boardCopy[idx] = xIsNext ? 'x' : '0';
        setBoard(boardCopy);
        setXisNext(!xIsNext);

    }
    const jumpTo = () => {

    }
    const renderMoves = () => {
        return <button className = 'border-2 border-black bg-blue-500 px-5 py-2 rounded-md' onClick={() => setBoard(Array(9).fill(null))}>click to start</button>

    }
  return (
    <>
        <Board squares={board} onClick={handleClick}/>
        <div className=''>
            <p className='w-[200px] mt-6 '>{winner ? 'Winner:'  + winner : 'Next Player :' + (xIsNext ? 'x' : '0')}</p>
            {renderMoves()}
        </div>
    </>
  )
}
