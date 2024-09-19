import React,{useState} from 'react'

function Counter() {

    const [count,setCount]=useState(0)
    const [showCount,setShowCount]=useState(false)



  return (
    <>
      <div >
        <button onClick={()=>setShowCount(!showCount)}>{showCount ? "Hide Show Count" : "Show Count"}</button>
        {
            showCount ? (
            <div>
            <h1>Conter Show Open</h1>
            <h2>Count is : {count}</h2>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            </div>
             ) :
            null
            
        }
        </div>
    </>
  )
}

export default Counter
