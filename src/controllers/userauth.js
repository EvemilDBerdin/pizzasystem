const Userauth = require('../models/userauth')
const { createToken, storeSession } = require('../middleware/users') 
const uuidv4 = require('uuid').v4

exports.post = async (req, res, next) => {
    try { 
        let data = []
        const [postUserauth] = await Userauth.get(req.body) 
        for (let key of postUserauth) { 
            data['email']= key.email 
            data['password']= key.password
            data['status']= key.status
        } 
        // const accessToken = createToken(data)

        // console.log(accessToken)
        if (data == {} || data == [] ) {
            res.status(400).json({ error: "User Doesn't Exist" })
        } else {
            //customer
            if (data['status'] == 0) { 
                let sessionId = uuidv4()
                // storeSession[sessionId] = data  
                res.cookie('access-token', sessionId, {
                    maxAge: 60 * 60 * 24 * 30 * 1000,
                })
                // res.set('Set-Cookie', `session=${sessionId}`)
                res.status(200).json({
                    "message": data['email'] + " has been successfully login",
                    "type": 0
                }) 
            }
            //admin
            else if (data['status'] == 1) { 
                let sessionId = uuidv4()
                storeSession[sessionId] = data
                // res.cookie('access-token', accessToken, {
                //     maxAge: 60 * 60 * 24 * 30 * 1000,
                // })
                // (res.set('Set-Cookie', `session=${sessionId}`)) ? res.status(200).json({"message": data['email'] + " has been successfully login","type": 1}) : res.status(400).json({ "message": "theres error on inserting your data", "type": 2 })
                if(res.set('Set-Cookie', `session=${sessionId}`)) { res.status(200).json({"message": data['email'] + " has been successfully login","type": 1}) }
                else { res.status(400).json({ "message": "theres error on inserting your data", "type": 2 }) }
            }
            else {
                res.status(400).json({
                    "message": "User Doesn't Exist",
                    "type": 2
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

