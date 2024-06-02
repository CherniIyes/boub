const pool = require('../db_connect.js');

const getCount = (callback) => {
      const query = 'SELECT COUNT(*) as count FROM event';
      pool.query(query, (err, result) => {
            if (err) {
                  return callback(err, null);
            }
            return callback(null, result[0].count);
      });
};

module.exports = { getCount };
