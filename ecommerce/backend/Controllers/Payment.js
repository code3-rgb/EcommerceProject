require('dotenv').config()
const Product = require(__dirname.toString().replace('/Controllers','/Models/Product/productSchema'))




const Payment =async (req,res,next)=>{

    const { productId,quantity } = req.body


    const product = await Product.findById({ _id: productId }).clone()
    if(product.quantity === 0) {
        res.send("Product is out of stock")
        return
    }

    const updateProduct = await Product.findByIdAndUpdate(productId, { quantity: product.quantity-quantity }).clone()

    res.send('Success')
    return


}


module.exports = Payment