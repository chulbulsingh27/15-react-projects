import React from 'react'
import { Question } from '../accordian/Question';


export const Menu = ({ items }) => {
    return (
        <div className='grid grid-cols-3 gap-4 gap-x-8'>
            {items.map((menuItem) => {
                const { id, title, img, desc, price } = menuItem;
                return (
                    <>
                        <div key={id} className=' text-blue-800 py-6'>
                            <img src={img} alt={title} className="w-[550px] h-[300px] px-[60px]"/>
                            <div className='flex flex-row items-center space-x-32'>
                                <div className='text-md font-semibold'>
                                    <p className='px-[60px]'>{title}</p>
                                </div>
                                <div className='font-bold'>
                                    <p className='px-[60px]'>${price}</p>
                                </div>
                            </div>
                            <p className='px-[60px]'>{desc}</p>
                        </div>
                    </>
                )
            })}
        </div>
    )
}
