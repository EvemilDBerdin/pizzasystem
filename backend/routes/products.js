var productsController = require('../controllers/products');
var express = require('express');
var productsRouter = express.Router();

productsRouter.get("/", productsController.get); // Get 
// productsRouter.get("/:id", productsController.getId); // Get id
// productsRouter.post("/", productsController.post); // Add 
// productsRouter.put('/', productsController.update);// Update 
// productsRouter.delete('/:id', productsController.delete); // Delete 

module.exports = productsRouter;