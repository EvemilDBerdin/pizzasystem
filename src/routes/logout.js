const userlogoutController = require('../controllers/logout')
const express = require('express')
const userlogoutRouter = express.Router()

userlogoutRouter.get("/", userlogoutController.get) // Get  

module.exports = userlogoutRouter