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
module.exports = {
    getjob,
   
};