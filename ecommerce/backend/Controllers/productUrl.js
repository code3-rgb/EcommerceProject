const Product = require(__dirname.toString().replace('/Controllers','/Models/Product/productSchema'))

const productUrl = async (req,res,next)=>{

    const {url} = req.body
    const id = String(req.params.id)
    const product = await Product.findOneAndUpdate({ _id: `${id.substr(1,id.length)}` }, { $addToSet: { url:  `${url}` } }).clone().catch(e=>console.log(e.message))
    console.log(product)
    res.send('Success')
    return

}

module.exports = productUrl