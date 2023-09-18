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
    
    if (counter>=30){
      document.getElementById("add").disabled = true;
    }
    else{
      setCounter(counter+1)
    }
    
  }
  
  const removeValue =()=>{
    // setCounter(counter-1)
    if (counter<=0){
      document.getElementById("remove").disabled = true;

    }
    else(
      setCounter(counter-1)
    )
  }

  return (
    <>
      <h1 >SaM Counter</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue} id='add'
      >Add value {counter}</button> 
      <br />
      <button
     onClick={removeValue} id='remove'
      >remove value {counter}</button>
      
    </>
  )
}

export default App
