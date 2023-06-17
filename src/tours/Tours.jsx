import React from 'react'
import { Tour } from './Tour'
export const Tours = ({tours,removeTour}) => {
  return (
    <div className=''>
        <p className='flex items-center justify-center text-xl font-bold p-2 '>Our Tours</p>
        <div className=''>
            {tours.map((tour) => {
                return <Tour key={tour.id} {...tour} removeTour={removeTour}/>
            })}
        </div>
    </div>
  )
}
