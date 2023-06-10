const User = require('./../models/signupModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { now } = require('mongoose');


function createSendToken(userData, status, res) {
    const token = JWT_signin(userData._id);
    console.log('token', token);

    const cookieOption = {
        expires: new Date(
            Date.now() + process.env.JWT_COOKIES_EXPIRESIN * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    }
    console.log('cookieOption', cookieOption);

    res.cookie('jwt', token, cookieOption);

    res.status(status).json({
        status: "sucess",
        message: "logged in"
    })
}

const JWT_signin = (id) => {
    return jwt.sign({ id }, process.env.Secret_String, { expiresIn: process.env.JWT_EXPIRES_IN })
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    if (email && password == null) {
        return console.log('please provide email and password 401');
    }

    const loginUserData = await User.findOne({ email }).select("+password");
    console.log(loginUserData);

    if (!loginUserData || !await bcrypt.compare(req.body.password, loginUserData.password)) {
        return res.status(401).json({
            status: "unsucess",
            message: "error occured"
        })
    } else {
        createSendToken(loginUserData, 200, res);
    }

}

exports.signup = async (req, res) => {
    const userInfo = await User.create({
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        lastName: req.body.lastName,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        email: req.body.email,
        phoneno: req.body.phoneno,
        createdDate: Date.now()

    }).then(data => {
        createSendToken(data, 201, res)

    })
    // .catch(err => {
    //     return res.status(401).json({
    //         status: "ufailed to create userACcount",
    //         message: err
    //     })
    // })
}