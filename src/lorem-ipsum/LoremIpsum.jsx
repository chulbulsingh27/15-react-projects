import React, { useState } from 'react'
import data from './data'
//console.log(data)
export const LoremIpsum = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        let amount = parseInt(count)
        if(count <= 0){
            amount = 0;
            alert('cant be generated')
        }
        if(count >=9){
            amount = 0
            alert('sorry we only have 8 items in our list')
        }
        //console.log(amount)
        setText(data.slice(0,amount));
    }
    return (
        <div className='p-4'>
            <div >
                <p className='text-2xl font-bold text-red-400 flex flex-row items-center justify-center'>tired of boring lorem ipsum?</p>
                <form onSubmit={handleSubmit} className='flex flex-row items-center justify-center py-6 space-x-4'>
                    <label htmlFor='amount' className='text-green-600 text-xl font-extrabold'>Paragraphs: </label>
                    <input type="number" value={count} name='amount' id='amount' className='border-2 border-gray-200 outline-slate-900 p-2 rounded-md hover:bg-slate-100' onChange={(e) => setCount(e.target.value)} />
                    <button type="submit" className='flex flex-row items-center justify-center content-center'>generate</button>
                </form>
                <div className='flex flex-col items-center justify-center space-y-4 bg-blue-200 p-3'>
                    {text.map((item,index) => {
                        return (
                            <>
                                <p key={index}>{item}</p>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
