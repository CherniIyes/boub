const pool = require('../db_connect.js');

//lkol
const getinern = ( req, res ) => {
    const sql = 'SELECT * from internship';
    pool.query(sql, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error getting internships from the database')
        } else {
            res.json(result)
        }
    });
};

const createinetrn = ( req, res ) => {

    const { image,pdf } = req.body;
    const newPartner = { image,pdf };
    
    const sql = 'INSERT INTO internship SET ?';
    pool.query(sql, newPartner, (error) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error creating internship');
      } else {
        res.status(200).json( { status: 'success', message: 'internship created successfully!'});
      }
    });
};

const updateintern = ( req, res ) => {

    const partnerId = req.params.id;
    const { image,pdf } = req.body;
    const updatedPartner = {image,pdf };

    const sql = 'UPDATE internship SET ? WHERE id = ?';
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

const deleteinetrn = ( req, res ) => {
    const partnerId = req.params.id;

    const sql = 'DELETE FROM internship WHERE id = ?';
    pool.query(sql , partnerId, (error) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error deleting partner');
      }
    
    
    res.status(200).json({ status: 'success', messasge: 'Partner deleted successfully!'});
    });
};
module.exports = {
 getinern ,
 createinetrn,
 updateintern,
 deleteinetrn
   
};