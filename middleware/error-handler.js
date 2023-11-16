const errorHandlerMiddleware = async (err,req,res,next) => {
    console.log(err)
    return res.status(5000).json({msg:'something went wrong lease try again later'})
}

module.exports = errorHandlerMiddleware