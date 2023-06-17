import React from 'react'
import { Square } from './Square'

export const Board = ({squares,onClick}) => {
  return (
    <div className='grid grid-cols-3 grid-rows-3 h-[270px] w-[270px] text-center content-between border-2 border-blue-900 rounded-md'>
      {squares.map((square,idx) => (
        <Square key={idx} value={square} onClick={() => onClick(idx)}/>
      ))}
    </div>
  )
}
