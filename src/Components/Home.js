import React from 'react'
import { useState } from 'react'
import { useNavigate,Navigate } from 'react-router-dom'
import Body from './Body'
export default function Home() {
    const[email,setEmail] = useState('')
    const[user,setUser] = useState('')

    function handleChange(event){
        setEmail(event.target.value)
       
        
    }
    function handleUser(event){
      setUser(event.target.value)
      
    }
    function handleSubmit(event){

      event.preventDefault()
      if(user && email){
      <Navigate to={<Body/>}/>
      }
    
    }
  
  return (
    <div>
        <h1>Welcome</h1>
        <input type='email' placeholder='enter your email' value={email} onChange={handleChange}/>
        <br/>
        <input type='text' placeholder='enter your username' value={user} onChange={handleUser}/>
        <br/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
