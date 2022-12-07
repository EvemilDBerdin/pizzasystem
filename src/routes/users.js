var usersController = require('../controllers/users')
var express = require('express')
var userRouter = express.Router()

userRouter.get("/", usersController.get) // Get 
userRouter.get("/:id", usersController.getId) // Get id
// userRouter.post("/", usersController.post) // Add 
// userRouter.put('/', usersController.update) // Update 
userRouter.delete('/:id', usersController.delete) // Delete 

module.exports = userRouter