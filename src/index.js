import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UsecontextFun } from "./UserContext/Usercontext1";
// import Login1 from "./Login1";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UsecontextFun>
        <App />
    </UsecontextFun>
  
    
    
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// import { UsecontextFun } from "./UserContext/Usercontext1";


// import Login1 from "./Login1";


// export default function App() {
//   // const {flag,setFlag} = useContext(Usecontext1)
 
//   return (
//     <>
//       <UsecontextFun>
        
//           <Login1/>
          
//          {/*  {flag==1 && <Login/>} */}

//       </UsecontextFun>
      
//     </>
//   );
// }
