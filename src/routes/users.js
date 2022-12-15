const usersController = require('../controllers/users')
const express = require('express')
const userRouter = express.Router()
const { validateToken } = require('../middleware/users') 

userRouter.get("/", validateToken, usersController.get) // Get 
userRouter.get("/:id", validateToken, usersController.getId) // Get id
userRouter.post("/", validateToken, usersController.post) // Add 
userRouter.put('/', validateToken, usersController.update) // Update 
userRouter.delete('/:id', validateToken, usersController.delete) // Delete 

module.exports = userRouter