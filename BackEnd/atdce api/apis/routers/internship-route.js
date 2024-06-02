const express = require('express');
const router = express.Router();



const {getinern,createinetrn,updateintern,deleteinetrn} = require('../controllers/internship-controller.js');

router.get('/get', getinern);
router.post('/',createinetrn)
router.put('/:id',updateintern)
router.delete('/:id',deleteinetrn)



module.exports = router;