const pool = require('../db_connect.js');

const getEvents = (req, res) => {
    const sql = 'SELECT * from event';
    pool.query(sql, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error getting events from the database')
        } else {
            res.json(result)
        }
    });
};

//bl wahda
const getEvent = (req, res) => {
    const eventId = req.params.id;

    const sql = 'SELECT * FROM event where event_id = ?';
    pool.query(sql, [eventId], (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error getting the event from the database');
        } else if (result.length === 0) {
            res.status(404).json({ message: 'Event with this id was not found' });
        } else {
            res.json(result[0]);
        }
    });
};

const createEvent = (req, res) => {

    const { event_id, event_title, description, image1, imge2, imge3, date } = req.body
    const newEvent = { event_id, event_title, description, image1, imge2, imge3, date };

    const sql = 'INSERT INTO event SET ?';
    pool.query(sql, newEvent, (error) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error adding event')
        } else {
            res.status(200).json({ status: 'success', message: 'Event created successfully' })
        }
    });
};

const updateEvent = (req, res) => {
    const eventId = req.params.id;
    const { event_title, description, image1, image2, image3, image4, date } = req.body;

    const updateData = { event_title, description, image1, image2, image3, image4, date };

    const sql = 'UPDATE event SET ? WHERE event_id = ?';
    pool.query(sql, [updateData, eventId], (error, result) => {
        if (error) {
            console.error(error);
            return res.status(500).send('Error updating event');
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json({ status: 'success', message: 'Event updated successfully!' });
    });
};

const deleteEvent = (req, res) => {
    const eventId = req.params.id;

    const sql = 'DELETE FROM event WHERE event_Id = ?'
    pool.query(sql, eventId, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error deleting event');
        }
        if (result.affectedRows === 0) {
            res.status(404).json({ message: 'Event not found' })
        }
        res.status(200).json({ status: 'success', messasge: 'Event deleted successfully!' });
    });
};

module.exports = {
    getEvents,
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent
};