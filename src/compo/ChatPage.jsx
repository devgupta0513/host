import axios from 'axios';
import React, { useState } from 'react'
const ChatPage = () => {
    const [chat, setChat] = useState("")
    const clickHandler = async () => {
        try {
            const { data } = await axios.get("/chatpage");

            setChat(data.name);
        }
        catch (e) {
            console.error("THE ERRROR IS = > ", e);
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
                <button onClick={clickHandler}
                    style={{
                        backgroundColor: "Red",
                        color: "yellow"
                    }}>
                    CLICK
                </button>
                <h1>{chat}</h1>
            </div>
        </>

    )
}
export default ChatPage