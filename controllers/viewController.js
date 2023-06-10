const duplicateController = require('./duplicateController');
const product = require('./../models/productModel')

exports.home = async (req, res) => {
    const productData = await product.find();
    
    res.render('home.pug', {productData})
}


exports.slug = async (req, res) => {
    console.log(req.params.slug)
    const queryData = req.params.slug.replace("_", " ");

    const productFind = await product.findOne({queryData})
    res.render('product.pug', {productFind});
}


// code
exports.shop = duplicateController.shop;
