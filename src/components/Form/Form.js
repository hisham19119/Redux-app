import React, { useState } from 'react'
import "./Form.css"
import { addUser } from '../../redux/userSlice'
import { useDispatch } from 'react-redux'
 export default function 
() {
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const handlesubmit = (e)=>{
        e.preventDefault() ;
        dispatch(addUser({name,email}))
    }
  return (
    <form onSubmit={handlesubmit}>
        <div className='formGroup'>
            <input type='text' placeholder='enter name' onChange={(e)=>{setName(e.target.value)}}/>
        </div>
        <div className='formGroup'>
            <input type='email' placeholder='enter your email' onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <div className='formGroup'>
            <input type='submit' placeholder='Add User'/>
        </div>
    </form>
  )
}
