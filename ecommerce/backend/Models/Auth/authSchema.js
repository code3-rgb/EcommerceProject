const mongoose = require('mongoose')


const User = new mongoose.Schema(

    {
        name: {
            type: String,
        },
        email: {
            type: String,
            unique: true,
            match: [
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                "Please Provide a valid email"
            ]
        }
        ,
        password: {
            type: String,
            minlength: 6,
            select: false
        },
        url: {
            type: String
        }
        ,
        isAdmin: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }

    
)



User.pre("save",function(next){
    console.log('Saved to the database')
    next()
})

module.exports =  mongoose.model('User', User,'Users')