
const Order = require(__dirname.toString().replace('/Controllers','/Models/Order/orderSchema'))

const jwt = require('jsonwebtoken')


const GetOrder = async (req,res,next)=>{

    try {
        const { token } = req.params
        const { id } = jwt.decode(token)
        console.log('i ran')
    
        const order = await Order.find({ user_id: id }).clone()
        res.send(order)
    
        return
    }   catch(e) {
        console.log(e.message)
    }

}

module.exports = GetOrder