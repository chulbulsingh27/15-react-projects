import React, { useState } from 'react'
import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs';
import { FaQuoteRight } from 'react-icons/fa'
import people from './data'

export const Review = () => {
  const [index, setIndex] = useState(0);
  // console.log(people)
  const { name, job, image, text } = people[index]
  const checkNumber = (number) => {
    if(number > people.length-1){
      return 0;
    }
    if(number < 0){
      return people.length-1;
    }
    return number;

  }
  const prevPerson = () => {
    setIndex((index) => {
      const newIndex = index+1;
      return  checkNumber(newIndex);
    })
  }
  const nextPerson = () => {
    setIndex((index) => {
      const newIndex = index-1;
      return checkNumber(newIndex);
    })
  }
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random()*people.length);
    if(randomNumber === index){
      randomNumber = index+1;
    }
    setIndex(checkNumber(randomNumber))
  }
  return (
    <div className='px-[670px]'>
      <div className='w-[490px] bg-gray-400 p-4 rounded-md shadow-lg '>
        <span className=''>
          <FaQuoteRight size={20} style={{backgroundColor:'blue'}}/>
        </span>
        <img className='w-[180px] h-[180px] rounded-full  ' src={image} alt={image} />
        <div className='flex items-center justify-center '>
          <p className='text-xl font-bold text-white'>{name}</p>
        </div>
        <div className='flex items-center justify-center '>
          <p className='text-xl font-bold text-blue-900'>{job}</p>
        </div>       
        <p className=' text-black'>{text}</p>
        <div className='flex items-center justify-center text-blue-950 py-3'>
          <button onClick={prevPerson}>
            <BsChevronDoubleLeft size={28}/>
          </button>
          <button onClick={nextPerson}>
            <BsChevronDoubleRight size={28}/>
          </button>
        </div>
        <div className='flex items-center justify-center py-3'>
          <button className='rounded-md text-blue-800 bg-blue-400' onClick={randomPerson}>surprise me</button>
        </div>
      </div>
    </div>
  )
}
