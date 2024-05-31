const mysql = require('mysql2');
const config = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'atdce'
};

<<<<<<< HEAD
const connection = mysql.createConnection(config)
connection.connect((err) => {
  if (err) {
    console.log(err)
  }
  else {
    console.log("db is connected ")
  }
})
=======
// sequelize instance
const sequelize = new Sequelize("atdce", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});
>>>>>>> 2c4562f71c2c0b154c131353c9c0fbf8cc4561fc



module.exports = connection;