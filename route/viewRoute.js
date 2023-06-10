const express = require('express');
const router = express.Router({ mergeParams: true });
const viewController = require('./../controllers/viewController');
const navController = require('./../controllers/navController')
const paymentController = require('./../controllers/paymentController');

router.route('/').get(viewController.home);
router.route('/shop').get(viewController.shop);
router.route('/shop/:slug').get(viewController.slug);
router.route('/shop/:slug/payment').get(paymentController.esewa);

// for navigation
router.route('/about').get(navController.about);
router.route('/blog').get(navController.blog);
router.route('/contact').get(navController.contact);
router.route('/listedItems').get(navController.listedItems);


module.exports = router;