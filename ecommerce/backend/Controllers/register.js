const bcrypt = require('bcryptjs')
const  jwt = require('jsonwebtoken')
const User = require(__dirname.toString().replace('/Controllers','/Models/Auth/authSchema'))


const asyncHandler = require('express-async-handler')
const express = require('express')

// Get a signed token
const generateToken = (id) =>{
    return jwt.sign({ id }, process.env.SECRET, { expiresIn: '10d'})
}


// Register the new user
const register = asyncHandler( async(req, res, next) => {

    const { name, email, password } = req.body

    console.log(name+' '+email+' '+password)

    //hash the password and store all details
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    //check if user exist
    const exist = await User.find({ email: email })


    //user validation to check if user exist or not 
    if(exist[0] === undefined) {
        const user = await User.create({ name: name, email: email, password: hash })
        const token = generateToken(user._id)
        res.status(200).json({
            name: name,
            token: token,
            id: user._id,
            isAdmin: user.isAdmin
        })
        req.token = token
        next()
    } 
    else {
        console.log('User with that email already exist!')
        res.status(401).send('User with that email already exist')
    }

    return

})




module.exports = register