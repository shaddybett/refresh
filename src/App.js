import React from 'react'
import Home from './Components/Home'
import Body from './Components/Body'
import Contact from './Components/Contact'
import { Route,Routes } from 'react-router-dom'
export default function App() {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='body' element={<Body/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
    
      
    </div>
  )
}
