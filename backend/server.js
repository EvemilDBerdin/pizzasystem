const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 8080;
const server = express();
const userRoute = require('./routes/users'); 
const productRoute = require('./routes/products');
// const customerRoute = require('./routes/customer');
// const categoryRoute = require('./routes/category');
// const salesRoute = require('./routes/sales');
// const supplierRoute = require('./routes/supplier');
// const errorController = require('./controller/error');


server.use(bodyParser.json()); 
server.use(cors());
server.use('/', userRoute);
server.use('/product', productRoute);
// server.use('/category', categoryRoute);
// server.use('/sales', salesRoute);
// server.use('/supplier', supplierRoute);


// server.use(errorController.get404);
// server.use(errorController.get500);
server.listen(PORT, () => {
    console.log(`Server's running on Port http://localhost:${PORT}`);
});
