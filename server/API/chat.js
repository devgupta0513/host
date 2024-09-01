const asyncHandler = require("express-async-handler")

const chat = asyncHandler( async(req,res)=>{
    res.status(200).json({
        "name" : "CHATPAGE",
    })
})

module.exports=chat;