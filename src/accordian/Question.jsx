import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

export const Question = ({ title, info }) => {
  const [showInfo,setShowInfo] = useState(true);
  return (
    <div className=''>
      <div className=' bg-gray-400 p-4 rounded-md shadow-lg flex flex-row space-x-4'>
        <p>{title}</p>
        <button className=''onClick={()=> setShowInfo(!showInfo)}>
          {showInfo?<AiOutlineMinus/> : <AiOutlinePlus />}
        </button>
      </div>
      {showInfo && <p>{info}</p>}   
    </div>
  )
}
