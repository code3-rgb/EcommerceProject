const Product = require(__dirname.toString().replace('/Controllers','/Models/Product/productSchema'))


const GetOneProduct =  async (req,res,next)=>{

    try {
        const { id } = req.params

        if(id === undefined) {
            console.log("Id is undefined")
            return
        }
    
        const product = await Product.findById({ _id: id }).clone()
    
        console.log("GetOneProduct route")
        res.send([product])
    
        return
    
    }

    catch(e) {
        console.log(e.message)
    }
}

module.exports = GetOneProduct