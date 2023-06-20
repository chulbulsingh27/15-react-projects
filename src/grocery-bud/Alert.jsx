import React, { useEffect } from 'react'


export const Alert = ({type,msg,removeAlert,list}) => {
  useEffect(()=> {
    const timeOut = setTimeout(()=>{
      removeAlert()

    },3000)
    return ()=> clearTimeout(timeOut)

  },[list])
  return (
    <div className={`alert alert-${type}`}>{msg}</div>
  )
}
