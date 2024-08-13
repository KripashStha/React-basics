import React, { useState } from 'react'

function UserInput() {
const [userInput, setUserInput] = useState("")

const handleInput = (e)=>{
  console.log(e)
  setUserInput(e.target.value)
}
  return (
    <div>
        <h1>Leaning Onchange event handler</h1>
        <input type='text' value={userInput} onChange={handleInput}></input>
        <p>You Typed: {userInput}</p>
    </div>
  )
}

export default UserInput
