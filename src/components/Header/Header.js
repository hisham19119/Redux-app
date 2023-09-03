import React from 'react'
import "./Header.css"
import { useSelector } from 'react-redux'

export default function 
() {

  const {name} = useSelector(state => state.user )

  return (
    <div className='header'>
        <h1> FollowMe Learn</h1>
        <p> Hello {name}</p>
    </div>
  )
}
