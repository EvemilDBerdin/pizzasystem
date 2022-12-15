var productsController = require('../controllers/products')
var express = require('express')
var productsRouter = express.Router()
const { validateToken } = require('../middleware/users') 

productsRouter.get("/", validateToken, productsController.get) // Get 
productsRouter.get("/:id", validateToken, productsController.getId) // Get id
productsRouter.post("/", validateToken, productsController.post) // Add 
productsRouter.put('/', validateToken, productsController.update) // Update 
productsRouter.delete('/:id', validateToken, productsController.delete) // Delete 

module.exports = productsRouter
