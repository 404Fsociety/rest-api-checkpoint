//require mongosse
const mongoose = require ('mongoose')

//create schema 
const Schema = mongoose.Schema

//create user schema
const userSchema = new Schema({
    name: {
        type : String,
        required : true,
    },
    email: {
        type : String,
        required : true,
        unique : true,
    },
    password: {
        type : String,
        required : true,
    },
    phone: Number, 
    role : { // role can be an admin or simple user
        type : String,
        default : 'user'
    }
},
{timestamps : true}
)

//export schema
module.exports = User = mongoose.model('user', userSchema); // Use 'user' as the model name