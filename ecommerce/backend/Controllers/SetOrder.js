const Order = require(__dirname.toString().replace('/Controllers','/Models/Order/orderSchema'))

const jwt = require('jsonwebtoken')


const SetOrder = async (req,res,next)=> {

    const [info,payment] = req.body

    const { id } = jwt.decode(payment.user_id)


    const order = await Order.create({
        address: info.address,
        zip_code: info.zip_code,
        phone_no: info.phone_no,
        payment_method: payment.payment_method,
        firstname: payment.firstname,
        lastname: payment.lastname,
        card_no: payment.card_no,
        cvc: payment.cvc,
        card_expiration: payment.card_expiration,
        product_id: payment.productId,
        quantity: payment.quantity,
        user_id: id,
        title: payment.title,
        price: payment.price
    })
    console.log(order)

    res.send('Order is Set')
    return

}

module.exports = SetOrder