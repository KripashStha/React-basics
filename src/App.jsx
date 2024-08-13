// import React, { useState } from 'react'
import Welcome from "./components/Welcome";
import UserInput from "./components/UserInput";
import List from "./components/List";
import People from "./components/People";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import About from "./pages/About";
import Nav from "./components/Nav";
import Notfound from "./components/Notfound";

// export default function InputComponent() {
//   const [inputText, setText] = useState('hello');

//   function handleChange(e) {
//     setText(e.target.value);
//   }

//   return (
//     <>
//       <input value={inputText} onChange={handleChange} />
//       <p>You typed: {inputText}</p>
//       <button onClick={() => setText('hello')}>
//         Reset
//       </button>
//     </>
//   );
// }

// function App(){
//   const[count, setcount] = useState(4);

//   function decrementCount(){
//     setcount(prevCount => prevCount - 1)

//   }

//   function incrementCount(){
//     setcount(prevCount => prevCount + 1)
//   }
//   return(
//     <>
//       <button onClick={decrementCount}>-</button>
//       <span> {count} </span>
//       <button onClick={incrementCount}>+</button>
//     </>

//   )
// }
// export default App

function App() {
  return (
    <div className="w-full min-h-screen">
      {/* <Welcome title = "Welcome to the react class" number ={20}/>
    <UserInput /> */}
      {/* <List/> */}
      {/* <People/> */}

      <Nav />
      {/* <Link to={`/browse/${data.id}`}>This is food id 1</Link> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}>
          {/* <Route path="/kripash" element={<div>This is Kripash.</div>}></Route> */}
        </Route>
        <Route path="/browse/:id" element={<Browse />}></Route>
        <Route path="*" element= {<Notfound/>}></Route>
      </Routes>
    </div>
  );
}
export default App;
