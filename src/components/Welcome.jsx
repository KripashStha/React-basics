import React, { useState } from 'react'


function Welcome(props){
    const [login, setLogin] = useState(true)

    const handleLogin = () => {
        setLogin(!login);
    }

//Conditional rendering

//     if(login)
//     {
//         return(
//             <div className="welcomemain">
//                <h2 className='welcome'>{props.title}</h2>
//                <p>Number of student: {props.number}</p>
        
//     </div>
//         )
//     }else{
//         return(<h1>User Not login</h1>)
//     }
  
// }

//&& operator

return(
    <>
    <button onClick={handleLogin}>{login?"Logout":"Login"}</button>

       {(login) &&
       <>
        <div className="welcomemain"> 
            <h2 className='welcome'>{props.title}</h2>
            <p>Number of student: {props.number}</p>
        </div>
       </>
       } 
       {(!login) && <h1>Not logged in</h1>}
    
    </>
)
}

// Welcome.propType = {
//     title: PropTypes.string,
//     studentNumber: PropTypes.number
// }
export default Welcome