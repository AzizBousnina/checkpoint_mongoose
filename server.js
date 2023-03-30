//Require express
const express = require('express');


//Get instance from express
const app = express();


//Require Dotenv
require('dotenv').config();


// MiddleWare bodyParser
app.use(express.json());

//require function connect
const connect = require('./config/connectDB');
connect();

//create port
const PORT = process.env.PORT;


//listen to the port
app.listen(PORT, (err) => {
    err ? console.log(err)
    :
    console.log(` The server is running on Port ${PORT} `)
})


//import router express
app.use('/api/person', require('./routes/personRoute'))
app.use('api/user', require('./routes/userRoute'))