const Product = require(__dirname.toString().replace('/Controllers','/Models/Product/productSchema'))


const DeleteProduct = (req,res,next) => {

    const { id } =  req.params

    const product = Product.findByIdAndDelete({ _id: id })
    product.then(res=> console.log('Product deleted'))
    .catch(e=> console.log(e.message))

    res.send("Product with id: " + id+ " Deleted")


    next()
}


module.exports = DeleteProduct