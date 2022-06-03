const Order = require(__dirname.toString().replace('/Controllers','/Models/Order/orderSchema'))




const DeleteOrder = async (req,res,next)=>{

    try {
        const { id } = req.params

        const order = await Order.findByIdAndDelete({ _id: id })
        console.log('Order deleted!')
        res.send("Order Is deleted!")
        return
    }   catch(e) {
        console.log(e.message)
    }

}


module.exports = DeleteOrder