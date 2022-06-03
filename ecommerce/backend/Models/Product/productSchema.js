const mongoose = require('mongoose')


const Product = new mongoose.Schema (
    {
        title: {
            type: String
        },
        price: {
            type: Number
        },
        description: {
            type: String
        },
        quantity: {
            type: Number
        },
        category: {
            type: String
        },
        url: {
            type: [String]
        }, 
        sellerId: {
            type: String
        }
    }
)


module.exports =  mongoose.model('product', Product,'products')
