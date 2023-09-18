import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //  let [counter,setCounter]= useState (15)

  // // let counter = 15
  // const addValue =()=> {
  //   console.log("clicked",counter)
  //   // counter = counter +1 
  //   setCounter(counter+1)
  // }
  
  let [counter,setCounter] = useState(10)
  const addValue = ()=>{
    setCounter(counter+1)
  }
  
  const removeValue =()=>{
    setCounter(counter-1)
  }

  return (
    <>
      <h1 >SaM Counter</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />
      <button
     onClick={removeValue}
      >remove value {counter}</button>
      
    </>
  )
}

export default App
