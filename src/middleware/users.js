const { sign, verify } = require('jsonwebtoken')

const createToken = (user) => { 
    let data = {}
    for (let key of user) {
        data['email'] = key.email
        data['userid'] = key.userid
    } 
    const accessToken = sign({ email: data.email, userid: data.userid }, "jwtsecretplschange")
    return accessToken
}

const validateToken = (req, res, next) => {
    const accessToken = req.cookies['access-token']
    if (!accessToken) return res.status(400).json({ error: "User not Authenticated!" })
    try {
        const validToken = verify(accessToken, "jwtsecretplschange")
        if (validToken) {
            req.authenticated = true
            return next()
        }
    } catch (err) {
        return res.status(400).json({ error: err })
    }
}
module.exports = { createToken, validateToken }