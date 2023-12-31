import { useState } from 'react'


function App() {
  const [color, setColor] = useState("white")

  return (
    <>
      <div className=' p-10 m-4 mb-4 rounded-md min-w-fit h-screen duration-200 ' 
       style={ {backgroundColor : color}}
      >
        <div className='fixed flex flex-wrap justify-center top-3 inset-x-0 px-2'>
          <div className=' flex flex-wrap justify-center gap-3 shadow-lg py-2 rounded-3xl bg-slate-400 px-3  '>
            <button  onClick={()=>setColor("black")}className=' outline-none px-4 py-1 rounded-full text-white shadow-lg '
             style={{backgroundColor:" black"}}
            >Blacka</button>
            <button  onClick={()=>setColor("red")}className=' outline-none px-4 py-1 rounded-full text-white shadow-lg '
             style={{backgroundColor:"red"}}
            >Red</button>
            <button onClick={()=>setColor("green")} className=' outline-none px-4 py-1 rounded-full text-white shadow-lg '
             style={{backgroundColor:"green"}}
            >Green</button>
            <button onClick={()=>setColor("blue")} className=' outline-none px-4 py-1 rounded-full text-white shadow-lg '
             style={{backgroundColor:"blue"}}
            >Blue</button>
            <button onClick={()=>setColor("Yellow")} className=' outline-none px-4 py-1 rounded-full text-gray-400shadow-lg '
             style={{backgroundColor:"Yellow"}}
            >Yellow</button>
            <button onClick={()=>setColor("pink")} className=' outline-none px-4 py-1 rounded-full text-gray-400 shadow-lg '
             style={{backgroundColor:"pink"}}
            > Pink</button>
          
          </div>
        </div>
      </div>
    </>
  )
}

export default App
