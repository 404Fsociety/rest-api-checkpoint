//require mongoose
const mongoose = require('mongoose')

//connect function
const connect = async () => {
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log('connected to database successfully !!!')
    } catch (error) {
        console.log(error)
    }
} 

//export function 
module.exports = connect