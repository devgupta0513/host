const asyncHandler = require("express-async-handler")

const about = asyncHandler(async(req,res)=>{
    res.status(200).json({
        "name": "aboutpage"
    })
})

module.exports=about;