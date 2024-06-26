const pool = require('../db_connect.js');


const getFunds = ( req, res) => {
    const sql= 'SELECT * from fund';
    pool.query(sql, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error getting funds from the database')
        } else {
            res.json(result)
        }
    });
};

const getFund = ( req, res ) => {
    const sql = 'SELECT * FROM fund where project_id = ? AND part_id = ?';
    pool.query(sql, [req.params.project_id, req.params.part_id], (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error getting the fund from the database');
        } else if ( result.length === 0 ) {
            res.status(400).json({ message: 'Fund was not found'});
        } else {
            res.json(result[0]);
        }
    });
};

const createFund = ( req, res ) => {

    const {image, date, pdf} = req.body;
    const newFund = {image, date, pdf} ;

    const sql = 'INSERT INTO fund SET ?';
    pool.query(sql, newFund, (error) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error creating fund');
        } else {
            res.status(200).json( { status: 'success', message: 'Fund created successfully!'});
        }
    });
};

const updateFund = ( req, res ) => {
    const {image, date, pdf}  = req.body;
    const updatedFund = {image, date, pdf} ;

    const sql = 'UPDATE fund SET ? WHERE project_id = ? AND part_id = ?';
    pool.query(sql, [updatedFund, req.params.project_id, req.params.part_id] , (error) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error updating fund');
        }
        if (result.affectedRows === 0) {
            res.status(404).json({ message: 'Fund not found'})
        }
            res.status(200).json({ status: 'success', message: 'Fund updated successfully!'});
    });
};

const deleteFund = ( req, res ) => {
    const { id } = req.params;

    const sql = 'DELETE FROM fund WHERE id = ?';
    pool.query(sql, [id], (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error deleting fund');
        } else if (result.affectedRows === 0) {
            res.status(404).json({ message: 'Fund not found' });
        } else {
            res.status(200).json({ status: 'success', message: 'Fund deleted successfully!' });
        }
    });
};


module.exports = {
    getFunds,
    getFund,
    createFund,
    updateFund,
    deleteFund
};