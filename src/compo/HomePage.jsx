import axios from 'axios'
import React, { useState } from 'react'

const HomePage = () => {
  const [home,setHome] = useState("")
  const fetchMsg = async () => {
    try{
      const {data} = await axios.get('/homepage');
      console.log(data.name);
      setHome(data.name)
    }
    
    catch(e)
    {
      console.error("THE ERROR IS = > ",e)
    }
    
  }
  return (

    <div style={{
      display: "flex",
      
      justifyContent: "center",
      alignItems: "center", 
    
      paddingRight: "50px"
    }}>


      <button onClick={fetchMsg}
        style={{
          backgroundColor: "Red",
          color: "yellow"
        }}
      >
      CLICK
      </button>
      <h1>  {home}</h1>
    </div>
  )
}

export default HomePage