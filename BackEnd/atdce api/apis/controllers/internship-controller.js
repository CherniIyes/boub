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
module.exports = {
 getinern 
   
};