const nodemailer = require("nodemailer");



const forgotPassword = (req,res,next)=>{

    const { email } = req.body

    console.log(email)
    if(email === undefined) {
        next()
        res.send('Email invalid!')
        return
    }

    const transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: 'mastershifu377@outlook.com',
            pass: 'mastershifu123'
        }
    })
    
    const options = {
        from: 'mastershifu377@outlook.com',
        to: `${email}`,
        subject: 'hello world!',
        text: 'Pls change your world! http://192.168.43.195:3000/'
     }
    
    
    transporter.sendMail(options, (err,info)=>{
        if(err) {
            console.log(err)
            return
        }
        console.log('Sent: '+info.response)
    })
    
    
    res.send('Check Email')
    return

    next()
}

module.exports = forgotPassword



