const dotenv = require('dotenv')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
// const cookieParser = require('cookie-parser') //3.5 (gzipped: 1.4k)

const server = express()
const userRoute = require('./src/routes/users')
const productRoute = require('./src/routes/products') 
const userauthRoute = require('./src/routes/userauth') 
const userlogoutRoute = require('./src/routes/logout')

const allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    next();
}
dotenv.config()

// server.use(cookieParser())
server.use(allowCrossDomain); 
server.use(bodyParser.json()) 
server.use(cors())
server.use('/users', userRoute)
server.use('/product', productRoute)  
server.use('/auth', userauthRoute)  
server.use('/logout', userlogoutRoute)  

server.listen(process.env.PORT, () => {
    console.log(`Server's running on Port ${process.env.URL}`)
})
