const express = require('express')
const router = express.Router()




const str = __dirname.toString().replace('/Routes','')

// Routes
const login = require(`${str}/Controllers/login`)
const register = require(`${str}/Controllers/register`)
const protect = require(`${str}/middleware/authMiddleware`)
const product = require(`${str}/Controllers/product`)
const forgotPassword = require(`${str}/Controllers/forgotPassword`)
const getAllUser = require(`${str}/Controllers/GetAllUser`)
const UpdateUrl = require(`${str}/Controllers/UrlUpdate`)
const SetAdmin = require(`${str}/Controllers/SetAdmin`)
const productUrl = require(`${str}/Controllers/productUrl`)
const getUser = require(`${str}/Controllers/GetUser`)
const GetProducts = require(`${str}/Controllers/GetProducts`)
const GetAllProducts = require(`${str}/Controllers/GetAllProducts`)
const DeleteProduct = require(`${str}/Controllers/DeleteProduct`)
const GetOneProduct = require(`${str}/Controllers/GetOneProduct`)
const Payment = require(`${str}/Controllers/Payment`)

const SetOrder = require(`${str}/Controllers/SetOrder`)
const GetOrder = require(`${str}/Controllers/GetOrder`)
const DeleteOrder = require(`${str}/Controllers/DeleteOrder`)
const GetACategory = require(`${str}/Controllers/GetACategory`)




// Get a Category
router.get('/getCategory/:category', GetACategory)


// Delete Order
router.get('/deleteOrder/:id', DeleteOrder)


// Get Order 
router.get('/getOrder/:token', GetOrder)

// Order Route
router.post('/setOrder', SetOrder)

// Payment Route
router.post('/payment',Payment )

// Get one Product 
router.get('/getOneProduct/:id', GetOneProduct)

// Delete a product
router.get('/deleteProduct/:id', DeleteProduct)

// Get Products
router.get('/getProducts/:token', GetProducts)

// Get all Products
router.get('/getAllProducts', GetAllProducts)

router.get('/getUser/:token', getUser)

router.put('/productUrl/:id', productUrl )

// Set Admin
router.post('/setAdmin', SetAdmin)


 
// Change forgotten password
router.post('/forgotPassword', forgotPassword)
// Url create

// Firebase Url Set
router.post('/setImageUrl', UpdateUrl)


router.get('/getAllUser', getAllUser)

router.post('/login',login)
router.post('/product', product)
router.post('/register',register)



module.exports = router