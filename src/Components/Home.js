import React from 'react'
import { useState } from 'react'
export default function Home() {
    const[email,setEmail] = useState('')

    function handleChange(event){
        setEmail(event.target.value)
    }
  return (
    <div>
        <h1>Welcome</h1>
        <input type='email' placeholder='enter your email' value={email} onChange={handleChange}/>
    </div>
  )
}
