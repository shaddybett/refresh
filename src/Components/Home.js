import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Home() {
    const[email,setEmail] = useState('')
    const[user,setUser] = useState('')
    const navigate = useNavigate();
    function handleChange(event){
        setEmail(event.target.value)
       
        
    }
    function handleUser(event){
      setUser(event.target.value)
      
    }
    function handleSubmit(event){
      event.preventDefault();
      if(user && email){
      navigate('/body');
      }
      else{
        alert('enter valid inputs')
      }
    
    }
  
  return (
    <div> 
      <form onSubmit={handleSubmit}>
        <h1>Welcome</h1>
        <input type='email' placeholder='enter your email' value={email} onChange={handleChange}/>
        <br/>
        <input type='text' placeholder='enter your username' value={user} onChange={handleUser}/>
        <br/>
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
