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


module.exports = {
    getcollo,
    createcoll
};