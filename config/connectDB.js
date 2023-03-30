//Require mongoose
const mongoose = require('mongoose');

// Connect DB function
const connect = async () => {
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log('Connected to DataBase.....')
    } catch (error) {
      console.log(error)  
    }
}

//export 
module.exports = connect