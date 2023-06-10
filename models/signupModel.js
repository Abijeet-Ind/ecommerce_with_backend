const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        unique: true,
        required: [true, "first is compolsory"]
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
        unique: true,
        required: [true, "last is compolsory"]
    },
    email: {
        type: String,
        unique: true,
        required: [true, "name is compolsory"],
        validator: [validator.isEmail, "enter a valid Email"]
    },
    phoneno: {
        type: Number,
        unique: true,
        required: [true, "name is compolsory"],
    },
    password: {
        type: Object,
        required: true,
    },
    confirmPassword: {
        type: String,
        required: true,
        validator: {
            validate: function (el) {
                return el == this.password
            }
        },
        message: "password didn't matched"
    },
    createdDate: Date
});

userSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 12);
    this.confirmPassword = await bcrypt.hash(this.confirmPassword, 12);
    console.log(this.password, this.confirmPassword);

    next();
})

const userModel = mongoose.model("userData", userSchema);

module.exports = userModel;