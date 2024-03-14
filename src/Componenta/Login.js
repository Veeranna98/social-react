
import React, { useContext } from 'react';
import { Usecontext1 } from '../UserContext/Usercontext1';
import Register from './Register';
import { useState } from 'react';
import './Login.css';

export default function Login() {
    const { flag, setFlag,UserArray,setUserArray,UserName1,SetuserName1 } = useContext(Usecontext1);
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
            SetuserName1(UserName)
            
            // console.log(UserName1)
            console.log(UserName)
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
        <div className='body'>

            <div className="login-container">
            <div>Login</div>
            <input type='text' id='text1' className="login-input" placeholder='Username'></input><br></br>
            <input type='password' id='text2' className="login-input" placeholder='Password'></input><br></br>
            <button onClick={handleLogin} className="login-button">Login</button><br></br>
            <button onClick={() => setFlag(2)} className="login-button">Create Account</button><br></br>
            {/* {flag === 2 && <Register />} */}
            </div>
        </div>
        </>
    );
}
