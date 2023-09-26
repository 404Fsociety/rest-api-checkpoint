// require mongoose
const mongoose = require('mongoose');

// create schema
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: {
        type: String,
        required: true // Use "required" instead of "require"
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: Number
});

// export schema
module.exports = mongoose.model('Contact', contactSchema); // Use 'Contact' as the model name
