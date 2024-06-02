const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');


const { getcollo,createcoll } = require('../controllers/collaborators-controller')

router.get('/', getcollo);
router.post('/',createcoll)

module.exports = router;