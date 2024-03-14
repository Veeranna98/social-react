
import React, { useContext } from 'react'
// import { UserContext } from '../App'
import { Usecontext1 } from './UserContext/Usercontext1';
//import { srikanth } from '../UserContext/Usercontext1';
import Home from './Componenta/Home';
import Login from './Componenta/Login';
import Register from './Componenta/Register';


export default function App() {
    const {flag, setFlag}=useContext(Usecontext1);
    //const {flag,setFlag} = useContext(srikanth)
    //const [flag,setFlag] = useState()
  return (
    <>

            {flag==0||flag==2?<Login/>:<Home/>}
            {/* {flag ===0 && <Login/>} */}
            {flag ===1 && <Home/>}
            {flag ===2 && <Register/>}
    </> 
  )
}