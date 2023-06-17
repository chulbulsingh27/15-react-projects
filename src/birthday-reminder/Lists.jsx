import React from 'react'

export const Lists = ({ people }) => {
    return (
        <div className=''>
            {people.map((person) => {
                const { id, image, name, age } = person;
                return (
                    <div className='flex flex-row space-x-4'>
                        <img className="w-[130px] p-2 rounded-full"  src = {image} alt={name}/>
                        <div className='mt-6 p-2'>
                            <p className='text-xl font-semibold '>{name}</p>
                            <p>{age} Years</p>
                        </div>
                    </div>
                )

            })}
        </div>
    )
}
