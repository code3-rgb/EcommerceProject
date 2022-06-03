
const Product = require(__dirname.toString().replace('/Controllers','/Models/Product/productSchema'))




const GetACategory  = async (req,res,next)=>{

    try {
        const {category} = req.params

        const products = await Product.find({ category: category })
    
        res.send(products)
    
        return
    } catch(e) {
        console.log(e.message)
    }



}


module.exports = GetACategory