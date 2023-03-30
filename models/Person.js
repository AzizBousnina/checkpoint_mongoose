//Require mongoose
const mongoose = require('mongoose');

//Create schema
const Schema = mongoose.Schema ;

//Create person 
const personSchema = new Schema ({
    name : {
        type : String ,
        required : true 
    },
    age : Number ,

    favoriteFoods : {
      type :  [String]
    },
})

//export 
module.exports = Person = mongoose.model('person', personSchema)