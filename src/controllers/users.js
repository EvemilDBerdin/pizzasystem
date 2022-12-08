const Users = require('../models/users')
const {validateToken} = require('../middleware/users')

exports.get = validateToken, async (req, res, next) => {
    try{
        const [getUsers] = await Users.get()
        res.status(200).json(getUsers)
    } 
    catch (err){
        if(!err.statusCode){
            err.statusCode = 500
        }
        next(err)
    }
}
exports.getId = validateToken, async (req, res, next) => {
    try{
        const [getIdUsers] = await Users.getId(req.params.id)
        res.status(200).json(getIdUsers)
    } 
    catch (err){
        if(!err.statusCode){
            err.statusCode = 500
        }
        next(err)
    }
}
exports.post = validateToken, async (req, res, next) => {
    try{ 
        const [postUsers] = await Users.post(req.body)
        res.status(200).json({
            "message": "User added sucessfully."
        })
    } 
    catch (err){
        if(!err.statusCode){
            err.statusCode = 500
        }
        next(err)
    }
}

exports.update = validateToken, async (req, res, next) => {
    try{
        const [updateUsers] = await Users.update(req.body)
        res.status(200).json({
            "message": "User updated sucessfully."
        })
    } 
    catch (err){
        if(!err.statusCode){
            err.statusCode = 500
        }
        next(err)
    }
}

exports.delete = validateToken, async (req, res, next) => {
    console.log('controllers'+req.params.id)

    try{
        const [deleteUsers] = await Users.delete(req.params.id)
        res.status(200).json({
            "message": "User deleted sucessfully."
        })
    } 
    catch (err){
        if(!err.statusCode){
            err.statusCode = 500
        }
        next(err)
    }
}