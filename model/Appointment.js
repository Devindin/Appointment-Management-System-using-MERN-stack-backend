const mongoose =require('mongoose');
const bcrypt = require('bcrypt');

const appointmentSchema = new mongoose.Schema({
 
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    patientNo: {
        type: String,
        required: true
    },
    patientName: {
        type: String,
        required: true
    },
    patientNIC: {
        type: String,
        required: true
    },
    patientContact: {
        type: String,
        required: true
    },
    patientAddress: {
        type: String,
        required: true
    },
    doctor: {
        type: String,
        required: true
    },

});

module.exports = mongoose.model('Appointment',appointmentSchema)

