
const UpdateUrl = async (req,res,next)=>{
    const { url,id } = req.body

    // console.log(url)

    const User = require(__dirname.toString().replace('/Controllers','/Models/Auth/authSchema'))
    
    await User.findByIdAndUpdate(id, { url: url } , (err,docs)=>{

        if(err) {
            console.log(err)
            return
        }
        console.log('Updated url of the User!')

    }).clone()
    res.send('Url update Success.')
    next()


}

module.exports = UpdateUrl
