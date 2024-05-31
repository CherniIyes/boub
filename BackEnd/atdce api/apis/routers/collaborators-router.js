const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');


const { getcollo } = require('../controllers/collaborators-controller')

router.get('/', getcollo);


module.exports = router;