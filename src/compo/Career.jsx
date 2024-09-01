import axios from 'axios'
import React, { useState } from 'react'

const Career = () =>{
    const [career,setCareer]=useState("")
    const clickHandler =async()=>{
        try {
            const {data} = await axios.get("/career")
            setCareer(data.name)
        } catch (error) {
            console.error("THE ERRORE IS = > ",error)
        }
    }
    return(
        <>
            <div style={{
      display: "flex",
      
      justifyContent: "center",
      alignItems: "center", 
    
      paddingRight: "50px"
    }}>
            <button
            style={{
          backgroundColor: "Red",
          color: "yellow"
        }}
         onClick={clickHandler}>CLICK</button>
            <h1>
                {career}
            </h1>
            </div>
        </>
    )
}
export default Career