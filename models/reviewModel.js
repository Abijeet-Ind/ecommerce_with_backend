const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    username:{
        type:String,
    },
    review:{
        type:String
    }
})

const reviewModel = mongoose.model('Review', reviewSchema);
module.exports = reviewModel;