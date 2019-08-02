const express = require('express');
const controller = require('./controller.js');
const router = express.Router();

router
    .route('/contact')
    .post(controller.postEmail)

router
    .route('/candidate')
    .get(controller.getCandidate)
    .post(controller.postCandidate)

router
    .route('/emails')
    .get(controller.getEmails)

router
    .route('/admin/login')
    .post(controller.adminLogin)

module.exports = router