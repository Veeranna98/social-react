
import { UsecontextFun } from "./UserContext/Usercontext1";


import Login1 from "./Componenta/Login1";


export default function App() {
  // const {flag,setFlag} = useContext(Usecontext1)
 
  return (
    <>
      <UsecontextFun>
        
          <Login1/>
          
         {/*  {flag==1 && <Login/>} */}

      </UsecontextFun>
      
    </>
  );
}