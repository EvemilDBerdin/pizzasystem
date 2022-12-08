const Userauth = require('../models/userauth') 
const {createToken} = require('../middleware/users')

exports.post = async (req, res, next) => { 
    try{    
        const [postUserauth] = await Userauth.get(req.body) 
        if(postUserauth == '') {
            res.status(400).json({error: "User Doesn't Exist"}) 
        } else { 
            const accessToken = createToken(postUserauth) 
            res.cookie('access-token', accessToken, {
                maxAge: 60*60*24*30*1000,
            })
            res.status(200).json({ "message": "User exists." 
        }) }
    } 
    catch (err){
        if(!err.statusCode){
            err.statusCode = 500
        }
        next(err)
    }
}

