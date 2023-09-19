import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
    
  return (
    <>
        <div className=' p-6  bg-slate-400'>
        <Card  username="tax43"  btntext="Bye me "  />
       <Card username="Termox" btntext="chuk me "  />
       <Card username="Sarmone" />
        </div>
      
    </>
   
  )
}

export default App
