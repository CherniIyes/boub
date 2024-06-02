const pool = require('../db_connect.js');

//lkol
const getjob = ( req, res ) => {
    const sql = 'SELECT * from currentjob';
    pool.query(sql, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error getting currentjobs from the database')
        } else {
            res.json(result)
        }
    });
};
const createPJob = ( req, res ) => {

    const { image,pdfl } = req.body;
    const newPartner = { image,pdfl };
    
    const sql = 'INSERT INTO currentjob SET ?';
    pool.query(sql, newPartner, (error) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error creating currentjob');
      } else {
        res.status(200).json( { status: 'success', message: 'currentjob created successfully!'});
      }
    });
};

const updatejob = ( req, res ) => {

    const partnerId = req.params.id;
    const { image,pdfl } = req.body;
    const updatedPartner = {image,pdfl };

    const sql = 'UPDATE currentjob SET ? WHERE id = ?';
    pool.query(sql, [updatedPartner, partnerId], (error) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error updating partner');
      }
     
    {
        res.status(200).json({ status: 'success', message: 'Partner updated successfully!'});
    }
    });
};

const deletejob = ( req, res ) => {
    const partnerId = req.params.id;

    const sql = 'DELETE FROM currentjob WHERE id = ?';
    pool.query(sql , partnerId, (error) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error deleting partner');
      }
    
    
    res.status(200).json({ status: 'success', messasge: 'Partner deleted successfully!'});
    });
};

module.exports = {
    getjob,
    createPJob,
    updatejob,
    deletejob
};