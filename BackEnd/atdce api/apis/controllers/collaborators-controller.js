const pool = require('../db_connect.js');

const getcollo = ( req, res ) => {
  const sql = 'SELECT * from collaborators';
  pool.query(sql, (error, result) => {
      if (error) {
          console.error(error);
          res.status(500).send('Error getting collaborators from the database')
      } else {
          res.json(result)
      }
  });
};


const createcoll= ( req, res ) => {

    const { image5 } = req.body;
    const newPartner = { image5 };
    
    const sql = 'INSERT INTO collaborators SET ?';
    pool.query(sql, newPartner, (error) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error creating partner');
      } else {
        res.status(200).json( { status: 'success', message: 'Partner created successfully!'});
      }
    });
};
const updatecoll = ( req, res ) => {

  const id = req.params.id;
  const { image5 } = req.body;
  const updatedPartner = {image5 };

  const sql = 'UPDATE collaborators    SET ? WHERE id= ?';
  pool.query(sql, [updatedPartner, id], (error) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error updating coll');
    }
   
  {
      res.status(200).json({ status: 'success', message: 'coll updated successfully!'});
  }
  });
};

const deletecoll = ( req, res ) => {
  const partnerId = req.params.id;

  const sql = 'DELETE FROM collaborators WHERE id = ?';
  pool.query(sql , partnerId, (error) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error deleting collaborators');
    }
  
  
  res.status(200).json({ status: 'success', messasge: 'collaborators deleted successfully!'});
  });
};



module.exports = {
    getcollo,
    createcoll,
    updatecoll,
    deletecoll
};