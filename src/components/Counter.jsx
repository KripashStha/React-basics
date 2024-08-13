import React from 'react'
import { useState } from 'react'

function Counter() {
  const[counter, setcounter] = useState(0);
  const [color, setColor] = useState("red");
  
  return (
    <div>
       <h1 style={{color:`${color}`}}>Counter component</h1>

                <button onClick={()=>setColor("blue")}>
                Change to blue color</button>

                
                <h2>Counter: {counter}</h2>
                <button onClick={()=>setCounter(counter + 1)}>
                    Increase by 1</button>

                <button onClick={()=>setCounter(counter - 1)}>
                    Decrease by 1</button>

    </div>
  )
}

export default Counter