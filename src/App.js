import React from 'react'
import Home from './Components/Home'
import Body from './Components/Body'
import { Route,Routes,Link } from 'react-router-dom'
export default function App() {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='body' element={<Body/>}/>
      </Routes>
    
      
    </div>
  )
}
