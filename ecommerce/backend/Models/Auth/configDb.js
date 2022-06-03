const mongoose = require('mongoose')


// Mongoose connection
let conn
const connect = async ()=>{
    try {
        conn = await mongoose.connect(process.env.URL)
        console.log(`Connected To MongoDB: ${ conn.connection.host }`)

    }   catch(e) {
        console.log(e.message)
        process.exit(1)
    }
}


module.exports = {connect,conn}


