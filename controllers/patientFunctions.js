const Patient = require('../models/patient');

exports.getPatients = (req, res, next) => {
    Patient.find().then(patients => {
        console.log()
    })
}