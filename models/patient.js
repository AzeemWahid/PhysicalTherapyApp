const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const patientSchema = new Schema({
    name: String,
    age: Number
});

module.exports = mongoose.model('Patient', patientSchema);