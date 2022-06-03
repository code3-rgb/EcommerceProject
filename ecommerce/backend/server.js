require('dotenv').config()

const express = require('express')
const router = require(`${__dirname}/Routes/route`)
const { connect } = require(`${__dirname}/Models/Auth/configDb`)
const authMiddleware = require(`${__dirname}/middleware/authMiddleware`)
const app = express()
const cors = require('cors')



// Connect to localhost database
connect()


// Cross-Origin middle ware
app.use(cors())





app.use(express.urlencoded({extended:true}))
app.use(express.json())
// app.use(authMiddleware)
app.use(router)



//server connection
const port = process.env.PORT || 3000
const server = app.listen(port, () => {
    console.log(`Listening at port: ${port}`)
})
