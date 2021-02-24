const User = require('../models/user');

/*
exports.getPatients = (req, res, next) => {
    Patient.find().then(patients => {
        console.log()
    })
}



exports.createUser = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const user = new User({
        name: name, email: email, password: password
    }).then(console.log("USER DATA ", user)).catch(err => console.log(err));
}

*/

exports.createUser = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const user = new User({
        name, email, password
    });
    user.save().then(result => {
        console.log('created user');
    }).catch(err => {
        console.log(err);
    });
}