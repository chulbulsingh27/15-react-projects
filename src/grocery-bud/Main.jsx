import React, { useEffect, useState } from 'react'
import { Alert } from './Alert'
import { List } from './List'
const getLocalStorage = () => {
    let list = localStorage.getItem('list')
    if(list){
        return JSON.parse(localStorage.getItem('list'))
    }
}

export const Main = () => {
    const [name, setName] = useState('')
    const [list, setlist] = useState(getLocalStorage)
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null)
    const [alert, setAlert] = useState({
        show: false, msg: '', type: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            //setAlert({show:true,msg:'please enter a value',type:'danger'})
            //alert
            showAlert(true, 'danger', 'please enter a value')
        } else if (name && isEditing) {
            setlist(list.map((item)=>{
                if(item.id === editId){
                    return {...item,title:name}
                }
                return item;
            }))
            setName('')
            setEditId(null)
            setIsEditing(false)
            showAlert(true,'success','value changed')
            //editing
        } else {
            showAlert(true, 'success', 'item added to the list')
            const newItem = { id: new Date().getTime().toString(), title: name }
            setlist([...list, newItem])
            setName('')
        }
    }
    const showAlert = (show = false, type = "", msg = "") => {
        setAlert({ show, type, msg })
    }
    const clearList = () => {
        showAlert(true, 'danger', 'empty list')
        setlist([]);
    }
    const removeItem = (id) => {
        showAlert(true, 'danger', 'item removed from the list')
        setlist(list.filter((item) => item.id !== id))

    }
    const editItem = (id) => {
        const specificItem = list.find((item) => item.id === id)
        setIsEditing(true)
        setEditId(id)
        setName(specificItem.title)

    }
    useEffect(()=>{
        localStorage.setItem('list', JSON.stringify(list))

    },[list])
    return (
        <div className='px-[650px]'>
            <section className=' w-[700px] rounded-md bg-pink-200 shadow-lg'>
                <form onSubmit={handleSubmit} className=''>
                    {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
                    <p className='flex flex-row items-center justify-center text-2xl  font-bold '>grocery-bud</p>
                    <div className='flex flex-row items-center justify-center space-x-4'>
                        <input placeholder='e . g . eggs' value={name} className='border border-black p-2 rounded-md 
                        w-[450px]'
                            onChange={(e) => setName(e.target.value)} />
                        <button type='submit' className='border-2 border-black bg-blue-300 px-6 p-2 rounded-md'>
                            {isEditing ? 'edit' : 'submit'}
                        </button>
                    </div>
                </form>
                {list.length > 0 && (
                    <div className='flex flex-col items-center justify-center'>
                        <List items={list}  removeItem={removeItem} editItem={editItem}/>
                        <button className='text-red-400' onClick={clearList}>clear-items</button>
                    </div>
                )}
            </section>
        </div>
    )
}
