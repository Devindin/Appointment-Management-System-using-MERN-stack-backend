const mongoose =require('mongoose');
const bcrypt = require('bcrypt');

const patientSchema = new mongoose.Schema({
 
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },

    age:{
        type: String,
        required: true
    },

    gender:{
        type: String,
        required: true
    },

    contact: {
        type: String,
        required: true
    },


    address: {
        type: String,
        required: true
    },

    patientID: {
        type: String,
        required: true,
        unique: true
    },

    patientNIC: {
        type: String,
        required: true
    },

    diagnose: {
        type: String,
        required: true
    },

    treatment: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Patient',patientSchema)

