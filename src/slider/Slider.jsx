import React, { useEffect, useState } from 'react'
import {FaQuoteRight} from 'react-icons/fa'
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi'
import data from './data'

export const Slider = () => {
    const [people,setPeople] = useState(data);
    const [index,setIndex] = useState(0);
    useEffect(()=>{
        const lastIndex = people.length-1;
        if(index < 0){
            setIndex(lastIndex)
        }
        if(index > lastIndex){
            setIndex(0)
        }

    },[index,people])
    useEffect(()=>{
        setInterval(()=>{
            setIndex(index+1)

        },3000)

    },[index])


  return (
    <div>
        <div className='flex flex-row items-center justify-center text-2xl font-bold '>
            <span className='text-red-500 p-4'>/</span>Reviews
        </div>
        <div>
            {people.map((person,personIdx)=>{
                const {id,name,image,title,quote} = person;
                return(
                    <>
                    <div key={id} className='flex flex-col items-center justify-center  '>
                        <img className='border-2 border-red-800 w-[200px] h-[200px] rounded-full' src={image} alt='png' />
                        <p>{name}</p>
                        <p>{title}</p>
                        <p>{quote}</p>
                        <FaQuoteRight />
                    </div>
                    <div className='flex flex-row items-center justify-center space-x-96'>
                        <button className='bg-gray-500' onClick={()=> setIndex(index+1)}>
                            <FiChevronLeft/>
                        </button>
                        <button className='bg-gray-500' onClick={()=>setIndex(index-1)}>
                            <FiChevronRight/>
                        </button>
                    </div>
                    </>

                )

            })}

        </div>
    </div>
  )
}
