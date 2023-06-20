import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

export const List = ({ items,removeItem ,editItem}) => {
    return (
        <div className='py-2'>
            {items.map((item) => {
                const { id, title } = item;
                return (
                    <div key={id} className='flex pr-16  bg-slate-300 py-4 p-2 rounded-t-lg'>
                        <p className='w-[200px]'>{title}</p>
                        <div className='space-x-4 pl-72 w-[360px]'>
                            <button className='text-green-600 ' type='button' onClick={()=> editItem(id)}>
                                <FaEdit size={24}/>
                            </button>
                            <button className='text-red-600' type='button' onClick={()=>removeItem(id)}>
                                <FaTrash size={20}/>
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
