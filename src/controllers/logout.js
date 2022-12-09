const { storeSession } = require('../middleware/users') 

exports.post = async (req, res, next) => {
    try {
        let sessionId = req.headers.cookie?.split('=')[1]
        delete storeSession[sessionId]
        res.set('Set-Cookie', `session=; expires=Thu, 01 Jan 1970 00:00:00 GMT`)
        res.status(200).json({"message": "Successfully Logout"})
    }
    catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500
        }
        next(err)
    }
}

