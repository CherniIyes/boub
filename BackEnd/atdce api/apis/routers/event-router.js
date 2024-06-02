const express = require('express');
const router = express.Router();
const eventController = require('../controllers/event-controller.js');

router.get('/get', eventController.getEvents);
router.get('/count', eventController.getEventCount);
router.get('/:id', eventController.getEvent);
router.post('/', eventController.createEvent);
router.put('/:id', eventController.updateEvent);
router.delete('/:id', eventController.deleteEvent);

module.exports = router;
