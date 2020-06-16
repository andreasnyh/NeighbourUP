const express = require('express');
const User = require('../db/models/user.model');

const app = express();

// create application/json parser
const jsonParser = express.json();
app.use(jsonParser);

// create application/x-www-form-urlencoded parser
const urlencodedParser = express.urlencoded({ extended: false });
app.use(urlencodedParser);

app.get('/', (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

app.post('/findUser', (req, res) => {
  console.log('find user ', req.body);
  User.find({ email: req.body.email })
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

app.post('/add', (req, res) => {
  const {
    email,
    adress,
    coAdress,
    lastName,
    password,
    firstName,
    postalNumber,
    postalAdress,
  } = req.body;

  const newUser = new User({
    email,
    adress,
    coAdress,
    lastName,
    password,
    firstName,
    postalNumber,
    postalAdress,
  });

  newUser
    .save()
    .then(() => res.json(newUser))
    .catch((err) => {
      console.log(err.message);
      res.status(400).json(`Error saving user`);
    });
});

module.exports = app;
