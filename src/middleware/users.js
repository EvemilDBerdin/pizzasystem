const { sign, verify } = require('jsonwebtoken')
require('dotenv').config()  

const createToken = async (res) => { 
    let data = {}
    data['email'] = res.email
    data['password'] = res.password   
    const accessToken = sign(JSON.stringify({data}), "test" )
    return accessToken
}

const validateToken = async (req, res, next) => {  
    // let cookie = req.headers.cookie?.split('=')[1]; 
    // console.log(req.headers.cookie)
    // console.log(req.cookie['authorization'])
    console.log(req.headers.cookie)
    console.log(req.signedCookies)
    let test = JSON.stringify(req.cookie)
    console.log(test) 
    // if (!cookie) return res.status(400).json({ error: "User not Authenticated!" })
    // try {  
    //     const validToken = verify(cookie, "test") 
    //     if (validToken) { 
    //         req.authenticated = true
    //         return next(); 
    //     }
    // } catch (err) {
    //     return res.status(400).json({ jsonerror: err })
    // } 
}


module.exports = { createToken, validateToken }