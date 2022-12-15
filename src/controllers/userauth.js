const Userauth = require('../models/userauth') 

exports.post = async (req, res, next) => {
    try {
        let data = {}
        const [postUserauth] = await Userauth.auth(req.body)  
        for(let res of postUserauth){ 
            data['email'] = res.email
            data['access_token'] = res.access_token
            data['status'] = res.status
        } 
        if (data == {} || data == []) {
            res.status(400).json({ error: "User Doesn't Exist" })
        } else {
            //customer
            if (data['status'] == 0) {      
                res.status(200).json({
                    "token": data['access_token'],
                    "message": data['email'] + " has been successfully login",
                    "type": data['status'] 
                })
            }
            //admin
            else if (data['status'] == 1) {    
                res.status(400).json({ "message": data['email'] + " has been successfully login", "type": data['status'] })
            }
            else {
                res.status(400).json({
                    "message": "User Doesn't Exist",
                    "type": data['status'] 
                })
            }
        }
    }
    catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500
        }
        next(err)
    }
}

