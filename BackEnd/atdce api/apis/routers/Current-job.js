const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

const { reqValidation, BlogValidation } = require('../validators_mw.js');
const { getjob} = require('../controllers/Current-job.js');

router.get('/get', getjob);



module.exports = router;