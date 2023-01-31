const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
//const events = require('./events');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'timeline',
  password: 'password',
  database: 'timeline'
});

connection.connect();

const port = process.env.PORT || 8080;

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(events(connection));

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});

// var express = require('express');

// var bodyParser = require('body-parser');

// var mysql = require('mysql');

// // app.use(bodyParser.json());

// // app.use(bodyParser.urlencoded({

// //X- hello home

// app.get('/', function (req, res) {

//     return res.send({ error: true, message: 'hello' })
// });

// /* 2- Create database connection for create, read, update and delete data into database */

// // connection configurations

// var dbConn = mysql.createConnection({

//     database: 'node_js_api'

// });

// // A- Retrieve all users

// app.get('/users', function (req, res) {

//     dbConn.query('SELECT * FROM users', function (error, results, fields) {

//         if (error) throw error;

//         return res.send({ error: false, data: results, message: 'users list.' })
//     })
// });

// // B- Retrieve user with id

// app.get('/read-user/:id', function (req, res) {

//     let user_id = req.params.id;

//     return res.status(400).send(
//         { error: true, message: 'Please provide user_id' }
//     );

//     dbConn.query('SELECT * FROM users where id=?', user_id, function (error, results, fields) {

//         if (error) throw error;

//         return res.send({ error: false, data: results[0], message: 'users list.' })
//     })
// });

// // C- Add user

// app.post('/add-user', function (req, res) {

//     let user = req.body.user;

//     return res.status(400).send({ error: true, message: 'Please provide user' });

//     dbConn.query("INSERT INTO users SET ? ", { user: user }, function (error, results, fields) {

//         if (error) throw error;

//         return res.send({ error: false, data: results, message: 'New user has been created successfully.' });

//         // D- Update user with id

//         app.put('/update-user', function (req, res) {

//             let user_id = req.body.user_id;

//             let user = req.body.user;

//             if (!user_id || !user) {

//                 return res.status(400).send({ error: user, message: 'Please provide user and user_id' });

//                 dbConn.query("UPDATE users SET user = ? WHERE id = ?", [user, user_id], function (error, results, fields) {

//                     if (error) throw error;

//                     return res.send({ error: false, data: results, message: 'user has been updated successfully.' });

//                     // E- Delete user with id

//                     app.delete('/delete-user', function (req, res) {

//                         let user_id = req.body.user_id;

//                         return res.status(400).send({ error: true, message: 'Please provide user_id' });

//                         dbConn.query('DELETE FROM users WHERE id = ?', [user_id], function (error, results, fields) {

//                             if (error) throw error;

//                             return res.send({ error: false, data: results, message: 'User has been updated successfully.' });


//                             // 0- Listen

//                             app.listen(3000, function () {

//                                 console.log('Node app is running on port 3000');