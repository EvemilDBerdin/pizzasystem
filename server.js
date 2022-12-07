const dotenv = require('dotenv')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const server = express()
const userRoute = require('./src/routes/users') 
const productRoute = require('./src/routes/products')

// const customerRoute = require('./routes/customer')
// const categoryRoute = require('./routes/category')
// const salesRoute = require('./routes/sales')
// const supplierRoute = require('./routes/supplier')
// const errorController = require('./controller/error')

dotenv.config()
server.use(bodyParser.json()) 
server.use(cors())
server.use('/users', userRoute)
server.use('/product', productRoute)
// server.use('/category', categoryRoute)
// server.use('/sales', salesRoute)
// server.use('/supplier', supplierRoute)


// server.use(errorController.get404)
// server.use(errorController.get500)
server.listen(process.env.PORT, () => {
    console.log(`Server's running on Port ${process.env.URL}`)
})
