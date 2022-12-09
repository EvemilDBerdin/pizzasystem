const { sign, verify } = require('jsonwebtoken')

const createToken = (data) => {
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

const storeSession = {}

module.exports = { createToken, validateToken, storeSession }