const userauthController = require('../controllers/userauth')
const express = require('express')
const userauthRouter = express.Router() 

userauthRouter.post("/", userauthController.post)

module.exports = userauthRouter