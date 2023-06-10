const express = require('express');
const router = express.Router({ mergeParams: true });
const authController = require('./../controllers/authController');

router.route('/login').get(authController.login);
router.route('/signup').get(authController.signup);


module.exports = router;