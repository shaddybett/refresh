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
      <form onSubmit={handleSubmit}  class="row row-cols-lg-auto g-3 align-items-center" > 
        <h1>Welcome</h1>
        <div class="col-12">
  <label for="colFormLabel" class="col-sm-2 col-form-label">Email</label>
  <div class="col-sm-12">
        <input type='email' id="colFormLabelLg" placeholder='enter your email' value={email} onChange={handleChange}/>
        </div>
        </div>
        <br/>
        <div class="col-12">
  <label  for="inlineFormInputGroupUsername">Username</label>
  <div class="col-sm-12">
    <input type="text"  id="colFormLabelLg" value={user} placeholder="enter your username" onChange={handleUser}/>
  </div>
</div>
        <br/>
        <div class="col-12">
        <button type='submit'class="btn btn-primary" >Submit</button>
        </div>
        </form>
    </div>
  )
}