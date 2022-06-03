


const SetAdmin = (req,res,next)=>{

    const { id,bools } = req.body

   
    const User = require(__dirname.toString().replace('/Controllers','/Models/Auth/authSchema'))
    User.findByIdAndUpdate(id, { isAdmin: bools } , (err,docs)=>{

        if(err) {
            console.log(err)
            return
        }
        console.log('Admin set to :'+ bools)

    }).clone()
    res.send('Admin update Success.')
    next()


}

module.exports = SetAdmin