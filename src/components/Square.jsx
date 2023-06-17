import React from 'react'

export const Square = ({onClick,value}) => {
  return (
    <div>
        <button className='border-2 border-blue-900 font-bold text-lg cursor-pointer bg-blue-300 w-[90px] h-[90px]' onClick={onClick}>{value}</button>
    </div>
  )
}
