const Product = require(__dirname.toString().replace('/Controllers','/Models/Product/productSchema'))



const jwt = require('jsonwebtoken')



const GetProducts = async (req,res,next) => {

    try {
        const { token } = req.params


        const { id } = jwt.decode(token)
    
    
    
        const product = await Product.find({ sellerId: id })
    
    
    
        res.send(product)
        return
    }
    catch(e) {
        console.log(e.message)
    }
}

module.exports = GetProducts