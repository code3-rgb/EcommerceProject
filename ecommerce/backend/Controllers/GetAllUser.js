

const User = require(__dirname.toString().replace('/Controllers','/Models/Auth/authSchema'))



const getAllUser = async (req,res,next)=>{

    try {
        const user = await User.find({}).clone()
        console.log(user)
    
        res.send(user)
        return
    
    }
    catch(e) {
        console.log(e.message)
    }

}

module.exports = getAllUser