const User = require(__dirname.toString().replace('/Controllers','/Models/Auth/authSchema'))


const  jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')



// Get a signed token
const generateToken = (id) =>{
    return jwt.sign({ id }, process.env.SECRET, { expiresIn: '10d'})
}

const login = async (req,res,next)=>{
    const { email,password } = req.body



    if(email == '' || password == '')   {
        res.status(400).send('Invalid credential')
        return
    }


    const user = new Promise((resolve,reject)=>{
        const user = User.find({ email: email }).select('+password')
        resolve(user)
    })



    user.then( async user=>{
        if(user[0] === undefined) {
            res.send('no-user')
            console.log('no-user')
            }   else {
                const pwd = await bcrypt.compare(password,user[0].password)
                if(pwd) {
                    console.log(user[0].isAdmin)
                    res.send({ token: generateToken(user[0]._id), name: user[0].name, url: user[0].url, isAdmin: user[0].isAdmin })
                    next()
                 }   else {
                     res.send('incorrect')
                 }
        }
        



    })

    



    return

}

module.exports = login