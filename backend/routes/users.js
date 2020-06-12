const express = require('express');
const User = require('../db/models/user.model');
const validate = require('../validate');

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

  console.log('validate user: ', validate(newUser));

  // if validation is OK save user to db
  validate(newUser)
    ? newUser
        .save()
        .then(() => res.status(201).json(newUser))
        .catch((err) => {
          console.log(err.message);
          res.status(400).json(`Error saving user`);
        })
    : res.status(400).json('Validation Error');
});

module.exports = app;
