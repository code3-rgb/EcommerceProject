const Product = require(__dirname.toString().replace('/Controllers','/Models/Product/productSchema'))





const GetAllProducts = async (req,res,next) => {

    try {
        const product = await Product.find()

        console.log("GetAllProductRoute")
    
        
        res.send(product)
        next()
    }   catch(e) {
        console.log(e.message)
    }
}

module.exports = GetAllProducts