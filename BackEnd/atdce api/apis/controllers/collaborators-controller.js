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

//bl wahda



module.exports = {
    getcollo,
    
};