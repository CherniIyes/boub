const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');


const { getcollo,createcoll, updatecoll, deletecoll } = require('../controllers/collaborators-controller')

router.get('/', getcollo);
router.post('/',createcoll)
router.put('/:id',updatecoll)
router.delete('/:id',deletecoll)

module.exports = router;