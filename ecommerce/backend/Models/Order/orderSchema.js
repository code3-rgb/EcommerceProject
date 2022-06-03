const mongoose = require('mongoose')


const Order = new mongoose.Schema (
    {
        address: {
            type: String
        },
        zip_code: {
            type: String
        },
        phone_no: {
            type: String
        },
        card_no: {
            type: String
        },
        first_name: {
            type: String
        },
        last_name: {
            type: String
        }, 
        cvc: {
            type: String
        },
        card_expiration: {
            type: String
        },
        payment_method: {
            type: String
        },
        product_id: {
            type: String
        },
        quantity: {
            type: String
        },
        user_id: {
            type: String
        },
        title: {
            type: String
        },
        price: {
            type: String
        }
    }
)


module.exports =  mongoose.model('order', Order,'Order')
