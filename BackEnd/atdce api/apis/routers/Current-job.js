const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

const { reqValidation, BlogValidation } = require('../validators_mw.js');
const { getjob,createPJob, deletejob, updatejob} = require('../controllers/Current-job.js');

router.get('/get', getjob);
router.post('/',createPJob)
router.delete('/:id',deletejob)
router.put('/:id',updatejob)



module.exports = router;