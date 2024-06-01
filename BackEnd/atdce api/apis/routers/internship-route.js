const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

const { reqValidation, BlogValidation } = require('../validators_mw.js');
const {getinern} = require('../controllers/internship-controller.js');

router.get('/get', getinern);



module.exports = router;