const express = require('express');
const router = express.Router();
const userController = require('../controllers/userContollers');

router.get('/get/:email', userController.getUserByEmail);
router.get('/get', userController.getUsers);
router.post('/login', userController.login);
router.post('/register', userController.register);
router.put('/update/:id', userController.update);
router.get('/count', userController.getUserCount);

module.exports = router;