const asyncHandler = require("express-async-handler")

const contact = asyncHandler(async(req,res)=>{
    res.status(200).json({
        "name":"CONTACT PAGE",
        
    })
})


module.exports = contact