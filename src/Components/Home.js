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
    <>
    <h1 className='well'>Welcome</h1>
    <div className='inputs'> 
      <form onSubmit={handleSubmit}  class="row row-cols-lg-auto g-3 align-items-center" > 
       
        <div class="col-12">
  <label for="colFormLabel">Email</label>
  <div class="col-sm-12">
        <input type='email' class="form-control" id="colFormLabelLg" placeholder='enter your email' value={email} onChange={handleChange}/>
        </div>
        </div>
        <br/>
        <div class="col-12">
  <label  for="inlineFormInputGroupUsername">Username</label>
  <div class="col-sm-12">
    <input type="text" class="form-control" id="colFormLabelLg" value={user} placeholder="enter your username" onChange={handleUser}/>
  </div>
</div>
        <div class="col-12">
        <button type='submit'class="btn btn-primary" >Submit</button>
        </div>
        
        </form>
    </div>
    </>
  )
}