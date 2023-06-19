import React, { useEffect, useState } from 'react'
import rgbToHex from './util';



export const SingleColor = ({rgb,weight,index,hexColor}) => {
    console.log(hexColor)
    const [alert,setAlert] = useState(true);
    const bcg = rgb.join(',')
    const hex = rgbToHex(...rgb);
    useEffect(()=> {
        const timeout = setTimeout(()=>{
            setAlert(false);

        },3000)
        return () => clearTimeout(timeout)

    },[alert])
    //console.log(bcg)
  return (
    <div className=' content-center'>
        <article className='w-[200px] h-[200px] border-2 border-black' style={{backgroundColor:`rgb(${bcg})` }} onClick={() => {
            setAlert(true);
            navigator.clipboard.writeText(hex)
        }}>  
        <p className='p-6'>{weight}%</p>
        <p className='pl-4'>{hex}</p>
        {
            alert && <p className='p-4'>copied to clipboard</p>
        }
         
        </article>
    </div>
  )
}
