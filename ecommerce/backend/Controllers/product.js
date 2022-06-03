const product = require(__dirname.toString().replace('/Controllers','/Models/Product/productSchema'))
const jwt = require('jsonwebtoken')

const Product = async (req,res,next) =>{

    const { title,price,desc,quantity,category,url,sellerId } = req.body

    console.log(sellerId+'   from the seller id')
    console.log('This is from the seller Id\n'+sellerId)

    const { id } = await jwt.decode(sellerId)
    

    console.log('\nThis is from the Id '+ id)

    if(req.body === null)   {
        res.status(400).send('Invalid credential')
        return
    }
    

    const newProduct = await product.create({ title: title, price: price, description: desc, quantity: quantity, category: category,url: url,sellerId: id })
    // console.log(newProduct)
    res.send(newProduct._id)

    next()
}


module.exports = Product 