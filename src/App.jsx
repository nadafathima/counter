import { useState } from 'react'
import './App.css'
import Counter from './Counter'



function App() {

  // const [head,setHead]=useState()

  return (
    <>
    {/* <div>
      <h1>state handling - {head}</h1>
      <button onClick={()=>{setHead("hooks")}}>click</button>
    </div> */}
    <div style={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center" }}>
      <h1>Counter Application</h1>
      <Counter/>
    </div>
    </>
  )
}

export default App
