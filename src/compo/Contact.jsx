import axios from 'axios'
import React, { useState } from 'react'

const Contact = () => {
  const [msg, setmsg] = useState('')
  const clickHandler = async () => {
    try {
      const { data } = await axios.get("/contact")
      setmsg(data.name)
    }
    catch (e) {
      console.error("THE ERRROR IS = > ", e)
    }
  }
  return (
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
        }} onClick={clickHandler}>CLICK</button>
      <h1>{msg}</h1>
    </div>
  )
}

export default Contact