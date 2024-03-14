import React from 'react'
import { Usecontext1 } from '../UserContext/Usercontext1'
import { useContext } from 'react'
// import { Usecontext1 } from '../UserContext/Usercontext1'

function Home() {
  const {flag,setFlag,UserName1,SetuserName1} = useContext(Usecontext1)
  console.log(UserName1)
  return (
    <>
    <div>Home</div>
    <div>{UserName1}</div>
    <button onClick={() => setFlag(() => 0)}>Logout</button>
    
    </>
    
    
  )
}

export default Home