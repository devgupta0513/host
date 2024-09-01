const asyncHandler = require ("express-async-handler")


const career = asyncHandler(async(req,res)=>{
    res.status(200).json({
        "name":"CAREER PAGE"
    })
})

module.exports= career;