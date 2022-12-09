const userlogoutController = require('../controllers/logout')
const express = require('express')
const userlogoutRouter = express.Router()

userlogoutRouter.post("/", userlogoutController.post) // Get  

module.exports = userlogoutRouter