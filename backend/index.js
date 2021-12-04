const express = require('express');
const bodyParser = require('body-parser');
const dal = require('./dal');

const app = express();

app.use(bodyParser.json());

// feature one - create a root to get all users
app.get('/users', async (_, res) => {
  const users = await dal.getAllUsers();
  res.send(users);
});

// feature two - create a route to create a new user
app.post('/users', async (req, res) => {
  const { user } = req.body;
  await dal.createUser(user);
  res.sendStatus(200);
});

// feature three - create a route to update a user's balance
app.put('/users/:userId/balance', async (req, res) => {
  const { balance } = req.body;
  const { userId } = req.params;
  await dal.updateUserBalance(userId, balance);
  res.sendStatus(200);
});

app.listen(3001, () => {
  console.log('Listening on port 3001');
});










// var express = require('express');
// var app     = express();
// var cors    = require('cors');
// var dal     = require('./dal.js');
// const e = require('express');

// // used to serve static files from public directory
// app.use(express.static('public'));
// app.use(cors());

// // create user account
// app.get('/account/create/:name/:email/:password', function (req, res) {

//     // check if account exists
//     dal.find(req.params.email).
//         then((users) => {

//             // if user exists, return error message
//             if(users.length > 0){
//                 console.log('User already in exists');
//                 res.send('User already in exists');    
//             }
//             else{
//                 // else create user
//                 dal.create(req.params.name,req.params.email,req.params.password).
//                     then((user) => {
//                         console.log(user);
//                         res.send(user);            
//                     });            
//             }

//         });
// });


// // login user 
// app.get('/account/login/:email/:password', function (req, res) {

//     dal.find(req.params.email).
//         then((user) => {

//             // if user exists, check password
//             if(user.length > 0){
//                 if (user[0].password === req.params.password){
//                     res.send(user[0]);
//                 }
//                 else{
//                     res.send('Login failed: wrong password');
//                 }
//             }
//             else{
//                 res.send('Login failed: user not found');
//             }
//     });
    
// });

// // find user account
// app.get('/account/find/:email', function (req, res) {

//     dal.find(req.params.email).
//         then((user) => {
//             console.log(user);
//             res.send(user);
//     });
// });

// // find one user by email - alternative to find
// app.get('/account/findOne/:email', function (req, res) {

//     dal.findOne(req.params.email).
//         then((user) => {
//             console.log(user);
//             res.send(user);
//     });
// });


// // update - deposit/withdraw amount
// app.get('/account/update/:email/:amount', function (req, res) {

//     var amount = Number(req.params.amount);

//     dal.update(req.params.email, amount).
//         then((response) => {
//             console.log(response);
//             res.send(response);
//     });    
// });

// // all accounts
// app.get('/account/all', function (req, res) {

//     dal.all().
//         then((docs) => {
//             console.log(docs);
//             res.send(docs);
//     });
// });

// var port = 3001;
// app.listen(port);
// console.log('Running on port: ' + port);