import React from 'react'
import "./Sidebar.css"
import { useSelector } from 'react-redux'
export default function 
() {

    const {name} = useSelector(state => state.user)
  return (
    <div className='sidebar'>
        <ul> 
            <li><a href='#'>Home </a></li>
            <li><a href='#'>About </a></li>
            <li><a href='#'>contact </a></li>
            <li><a href='#'>Blog </a></li>
            <li><a href='#'>Hello {name}</a></li>
        </ul>
    </div>
  )
}
