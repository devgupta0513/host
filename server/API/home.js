const asyncHandler = require("express-async-handler");


const home = asyncHandler(async (req,res) =>{
    res.status(200).json({
        "name":"HOMEPAGE",
    })
})

module.exports= home;