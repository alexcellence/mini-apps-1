var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'yourpassword',
  database : 'purchases'
});

connection.connect((err) => {
  if (err) {
    console.log('There was an error setting up the database ', err)
  } else {
    console.log('Connected to database')
  }
});

module.exports = connection;