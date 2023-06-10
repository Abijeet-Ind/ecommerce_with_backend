const duplicateController = require('./duplicateController');

exports.home = (req, res, next) => {
    res.status(200).json({
        status: "sucess",
        message:"at the home section"
    })
}

exports.blog = (req, res) => {
    res.status(200).json({
        status: "sucess",
        message:"at the blog section"
    })
}


exports.listedItems = (req, res) => {
    res.status(200).json({
        status: "sucess",
        message:"at the cart section"
    })
}

exports.contact = (req, res) => {
    res.status(200).json({
        status: "sucess",
        message :"contact section"
    })
}

exports.about = (req, res) => {
    res.status(200).json({
        status: "sucess",
        message :"cart section"
    })
}

exports.shop = duplicateController.shop;