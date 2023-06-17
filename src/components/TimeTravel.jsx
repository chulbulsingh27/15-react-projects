import React, { useState } from 'react'
//import { calculateWinner } from '../Helper'

import { Board } from './Board'
import { findWinner } from './WinnerFunction'

export const TimeTravel = () => {
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [stepNumber,setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const winner = findWinner(history[stepNumber]);
    const handleClick = (idx) => {
        const timeInHistory = history.slice(0,stepNumber+1);
        const current = timeInHistory[stepNumber]
        const squares = [...current]
        //const boardCopy = [...board];
        //if user clicked on occupied square or game is over
        if (winner || squares[idx]) return;
        squares[idx] = xIsNext ? 'x' : '0';
        //setBoard(boardCopy);
        setHistory([...timeInHistory,squares])
        setStepNumber(timeInHistory.length)
        setXisNext(!xIsNext);

    }
    const jumpTo = (step) => {
        setStepNumber(step)
        setXisNext(step % 2 === 0)

    }
    const renderMoves = () => (
        history.map((_step,move) => {
            const destination = move ? `Go to move#${move}` : 'Go to Start';
            return (
                <li className = 'list-disc ' key={move}>
                    <button className='border-2 border-black bg-blue-500  rounded-md' onClick={() => jumpTo(move)}>{destination}</button>
                </li>
            )
        })
    )
    return (
        <>
            <Board squares={history[stepNumber]} onClick={handleClick} />
            <div className=''>
                <p className='w-[200px] mt-6 '>{winner ? 'Winner:' + winner : 'Next Player :' + (xIsNext ? 'x' : '0')}</p>
                {renderMoves()}
            </div>
        </>
    )
}