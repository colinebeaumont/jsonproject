
const express = require('express')
const app = express()
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'rtlry',
  database: 'LPDIP01'
});
app.get('/users', function (req, res) {
  connection.query(
    'SELECT * FROM user',
    function(err, results, fields) {
      res.json(results)
    }
  );
})
app.get('/users/:id', function (req, res) {
  connection.query(
    'SELECT * FROM user WHERE id=?',
    [req.params.id],
    function(err, results, fields) {
      res.json(results)
    }
  );
})
app.get('/', function (req, res) {
  res.json({
    "nom": "beaumont",
    "age": 26,
  }
  )
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})