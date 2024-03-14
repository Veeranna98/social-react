import React, { useContext } from 'react'
import Home from './Home'
// import { UserContext } from '../App'
import { Usecontext1 } from '../UserContext/Usercontext1';
import "./Register.css"

export default function Register() {
    const {flag,setFlag,Userobj,setUserObj,UserArray,setUserArray,UserName1,SetuserName1}=useContext(Usecontext1);
    const AddCustomer =() =>{
      console.log("hii")
      setUserArray((prevStudents) => [...prevStudents, Userobj]);
      SetuserName1(Userobj.name)
       //In React, it isn't allowed to change the original state array, so we can't use the push() method. We use the spread syntax (...) to unpack the elements of the existing array into a new array and add another value at the end.
      setUserObj({ name: "", mail:"",pass:""});
      
      console.log(UserArray)
      setFlag(1)
    }
  return (
    
<>
<div className='Register-model'>
                <div className='Register-model-content'>
                    <div className="Register-header">
                        <div className="Register-signup-title">Register</div>
                        <div onClick={() => setFlag(() => 0)} className="close">
                            &times;
                        </div>
                    </div>
                    <input
                        type="text"
                        value={Userobj.name}
                        onChange={(e) =>
                            setUserObj(prevStudent => ({
                                ...prevStudent,
                                ...{ name: e.target.value },
                            }))
                        }
                        placeholder="Enter Name"
                        className="Register-input"
                    />
                    <br />
                    <input
                        type="text"
                        value={Userobj.mail}
                        onChange={(e) =>
                            setUserObj(prevStudent => ({
                                ...prevStudent,
                                ...{ mail: e.target.value },
                            }))
                        }
                        placeholder="Enter Email"
                        className="Register-input"
                    />
                    <br />
                    <input
                        type="password"
                        value={Userobj.pass}
                        onChange={(e) =>
                            setUserObj(prevStudent => ({
                                ...prevStudent,
                                ...{ pass: e.target.value },
                            }))
                        }
                        placeholder="Enter Password"
                        className="Register-input"
                    />
                    <br />
                    <button onClick={AddCustomer} className="Register-button">Submit</button>
                </div>
            </div>
    </>
   
  )
}