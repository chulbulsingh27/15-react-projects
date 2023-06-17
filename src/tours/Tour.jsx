import React, { useState } from 'react'

export const Tour = ({ id, image, info, price, name,removeTour}) => {
  const [readMore,setReadMore] = useState(false);
  const handleToggle = () => {
    setReadMore(!readMore);
  }
  return (
    <div className='px-[650px] w-full h-[880px] '>
      <img className="content-between w-[600px] h-[500px] rounded-md" src={image} alt={name} />
      <footer>
        <div className='flex flex-col items-center justify-center text-lg font-bold'>
          <p >{name}</p>
          <p>Rs.{price}</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <p>{readMore ? info : `${info.substring(0,125)}...`}
          <button className='text-blue-600' onClick={handleToggle}>
          {readMore ? 'show less' : 'read more'}
          </button>
          
          </p>
          <button className=' border-2 border-black bg-blue-400 rounded-md px-6 m-4 py-3 ' onClick={()=>removeTour(id)}>not interested</button>
        </div>
      </footer>
    </div>
  )
}
