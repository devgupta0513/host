import React, { useState } from 'react';
import axios from 'axios';

const Api = () => {
    const [message, setMessage] = useState('');
    const [status1,setStatus1] = useState('')

    const fetchMessage = async () => {
        try {
            const { data } = await axios.get('/api'); // No need for the full URL
            console.log(data.message);
            setMessage(data.message);
        } catch (error) {
            console.error('Error fetching message:', error);
        }
    };
            
    const FetchMain =async () =>{
        try{
            const {data} = await axios.get("/name");
            console.log(data.name)
            setStatus1(data.name)
        }
        catch(e){
            console.error("error while status",e);
        }
    }

    return (
        <div>
            <button onClick={fetchMessage}>Fetch Message</button>
            <h1>{message}</h1>
            <button onClick={FetchMain}>fetch status</button>
            <h2>{status1}</h2>
        </div>
    );
}

export default Api;
