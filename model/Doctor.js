const mongoose =require('mongoose');
const bcrypt = require('bcrypt');

const doctorSchema = new mongoose.Schema({
 
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },

    dateOfBirth:{
        type: String,
        required: true
    },

    gender:{
        type: String,
        required: true
    },

    specialty: {
        type: String,
        required: true
    },

    experience: {
        type: String,
        required: true
    },

    licenseNumber:{
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Doctor',doctorSchema)

