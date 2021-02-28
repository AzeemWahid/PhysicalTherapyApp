const User = require('../models/user');


function createUser(name, email, password, userType, res) {
    const user = new User({
        name, email, password, userType
    });
    user.save().then(result => {
        console.log('created user');
        res.send({
            accountCreated: true,
            message: 'Your account was successfully created!'
        });
    }).catch(err => {
        console.log(err);
    });
}


exports.searchUserEmail = (req, res, next) => {
    User.find({ email: req.body.email }, function (err, theUser) {
        let email = req.body.email;

        if (theUser == '') {
            createUser(req.body.name, req.body.email, req.body.password, req.body.userType, res);
        }

        else {
            let userAccEmail = theUser[0].email;
            if (userAccEmail == email) {
                res.send({
                    accountCreated: false,
                    message: 'An account was found with this email, Please try logging in with it'
                });
            }
        }
    });
}


exports.login = (req, res, next) => {
    User.find({ email: req.body.email }, function (err, user) {
        let email = req.body.email;
        let password = req.body.password;
        console.log("node");

        if (user == '') {
            res.send({
                loginAttempt: false,
                loginEmailMessage: 'This email address is not associated with any account',
            });
            console.log("1");
            return;
        }

        let userAccEmail = user[0].email;
        let userAccPassword = user[0].password;
        let userName = user[0].name;
        let userType = user[0].userType;

        if (userAccEmail == email && userAccPassword != password) {
            res.send({
                loginAttempt: false,
                loginPwMessage: 'This password is incorrect'
            });
            console.log("2");
            return;
        }

        else {
            res.send({
                userName, userType,
                loginAttempt: true,
                loginMessage: 'Login successful!'
            });
            console.log("3");
            return;
        }
    });

}


