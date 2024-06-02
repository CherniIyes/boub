const express = require('express');
const router = express.Router();
const { getFunds, getFund, createFund, updateFund, deleteFund } = require('../controllers/funds-controller.js');

router.get('/', getFunds);
router.get('/:id', getFund);
router.post('/', createFund);
router.put('/:id', updateFund);
router.delete('/:id', deleteFund);

module.exports = router;