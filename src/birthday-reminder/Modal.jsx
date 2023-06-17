import React, { useState } from 'react'
import data from './data'
import { Lists } from './Lists';


export const Modal = () => {
    const[people,setPeople] = useState(data);
  return (
    <div className='w-[500px] h-[860px] bg-pink-100 text-center mt-8 ml-[700px] rounded-md'>
        <p className='text-xl font-bold mt-2 p-2 ' >{people.length} birthday's today</p>
        <Lists people={people}/>
        <button className='border-2 border-black bg-pink-400 px-16 py-2 rounded-md mt-8' onClick={()=> setPeople([])}>clear all</button>
        
    </div>
  )
}
