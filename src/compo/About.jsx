import axios from 'axios'
import React, { useState } from 'react'

const About = () =>{
    const [msg,setmsg]=useState('')
  const clickHandler =async()=>{
    try{
      const {data} = await axios.get("/about")


      setmsg(data.name)
    }
    catch(e)
    {
      console.error("THE ERRROR IS = > ",e)
    }
  }
  return (
    <div style={{
        display: "flex",
        
        justifyContent: "center",
        alignItems: "center", 
      
        paddingRight: "50px"
      }}>
      <button onClick={clickHandler}
      style={{
          backgroundColor: "Red",
          color: "yellow"
        }}>CLICK</button>
      <h1>{msg}</h1>
    </div>
  )
}
export default About