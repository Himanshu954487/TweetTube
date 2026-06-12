//This is boiler template code which is used in most of the production backend


// method for try and catch block 
/*
const asyncHandler = (fuc) => async (req, res, next) => {
    try {
        await fuc(req ,res, next) 
    } catch (error) {
        res.status(error.code || 500).json({
            success : false,
            message : error.message
        })
    }
    
}
*/

// method for promies

const asyncHandler = (requestHandler) => {
    (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>(next(err)))
    }
}

export { asyncHandler }