const jwt = require('jsonwebtoken')
const User = require(__dirname.toString().replace('/middleware','/Models/Auth/authSchema'))

const asyncHandler = require('express-async-handler')

const protect = asyncHandler (async (req,res,next)=>{
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1]
            //verify the token
            const decoded = jwt.verify(token, process.env.SECRET)

            //get user from the token   
            req.user = await User.findById(decoded.id)
            next()

        }   catch(error) {
            console.log(error.message)
            res.status(401)
            throw new Error('Not authorized')
        }
    }
    if(!token) {
        console.log('Has no access token')
        next()
        // throw new Error('No token')
    }
})

module.exports = protect

