const User = require(__dirname.toString().replace('/Controllers','/Models/Auth/authSchema'))




const jwt = require('jsonwebtoken')

const getUser = async (req,res,next) => {

    try {
        const { token } = req.params
        console.log(token)
        const {id} = jwt.decode(token)
        console.log(id)
    
        const user = await User.findById({ _id: id })
        res.send(user)
        return
    
    }   catch(e) {
        console.log(e.message)
    }
}

module.exports = getUser