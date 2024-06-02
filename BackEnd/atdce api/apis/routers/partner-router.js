const express = require('express');
const router = express.Router();



const { getPartners, getPartner, createPartner, updatePartner, deletePartner } = require('../controllers/partner-controller.js');

router.get('/', getPartners);
router.get('/:id', getPartner);
router.post('/', createPartner);
router.put('/:id', updatePartner);
router.delete('/:id', deletePartner);

module.exports = router;