const express = require("express")
const app = express()
const dotenv= require("dotenv")
const cors = require("cors")
const api = require("./api")
dotenv.config();
app.use(express.json());
Port = process.env.PORT
app.listen(Port, () => {
    console.log(`SERVER STARTED ON ${Port}`)
})
app.use(
    cors({
        origin:JSON.parse(process.env.URL),
        credentials:true
    })
)
app.use("/",api)

app.get('/',(req,res)=>{
    res.status(200).json({
        "fullName":"DEV GUPTA",
    })
})
