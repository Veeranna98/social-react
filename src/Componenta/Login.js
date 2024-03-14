
import React, { useContext } from 'react';
import { Usecontext1 } from '../UserContext/Usercontext1';
import Register from './Register';
import { useState } from 'react';

export default function Login() {
    const { flag, setFlag,UserArray,setUserArray } = useContext(Usecontext1);
    const UserName = useState();
    const Password = useState();
    

    const handleLogin = () => {
        const UserName = document.getElementById('text1').value;
        const Password = document.getElementById('text2').value;

       console.log(UserName);
       console.log(Password);
       let isLoggedIn = false;
       UserArray.map((value) =>{
        if((value.name === UserName) &&(value.pass === Password)){
            // setFlag((prevState) => 1)
            console.log("Login")
            setFlag(1);
            isLoggedIn = true;
            
            
        }
        
       })
       if (!isLoggedIn) {
        console.log("Not");
        alert("Invalid UserName or PassWord")
    }
       
       
    };

    return (
        <>
            <div>Login</div>
            <input type='text' id='text1' placeholder='Username'></input><br></br>
            <input type='password' id='text2' placeholder='Password'></input><br></br>
            <button onClick={handleLogin}>Login</button>
            <button onClick={() => setFlag(2)}>Create Account</button>
            {/* {flag === 2 && <Register />} */}
        </>
    );
}
