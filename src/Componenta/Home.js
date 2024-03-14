import React from 'react'
import { Usecontext1 } from '../UserContext/Usercontext1'
import { useContext } from 'react'

function Home() {
  const {UserName1,SetuserName1} = useContext(Usecontext1)
  console.log(UserName1)
  return (
    <>
    <div>Home</div>
    <div>{UserName1}</div>
    
    </>
    
    
  )
}

export default Home