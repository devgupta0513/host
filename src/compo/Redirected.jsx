import axios from 'axios'
import React, { useState } from 'react'

const Redirected = () => {
    const [home,setHome] = useState("")
    const fetchMsg = async () => {
      try{
        const {data} = await axios.get('/api');
        console.log(data.fullName);
        setHome(data.fullName)
      }
      
      catch(e)
      {
        console.error("THE ERROR IS = > ",e)
      }
      
    }
    return (
        <>
           <div style={{
      display: "flex",
      
      justifyContent: "center",
      alignItems: "center", 
    
      paddingRight: "50px"
    }}>
                <h1>
                    {process.env.REACT_APP_TITLE}
                </h1>
                <button onClick={fetchMsg}
        style={{
          backgroundColor: "Red",
          color: "yellow"
        }}
      >
      CLICK
      </button>
      <h2>  {home}</h2>
    </div>
        </>
    )
}
export default Redirected


