const express = require('express');
const controller = require('./controller.js');
const router = express.Router();

router
    .route('/contact')
    .post(controller.postEmail)

router
    .route('/candidate')
    .get(controller.getCandidate)

router
    .route('/emails')
    .get(controller.getEmails)

module.exports = router