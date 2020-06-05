const express = require('express');
const User = require('../db/models/user.model');

const app = express();

app.get('/', (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

app.get('/add', (req, res) => {
  const { firstName, lastName, email } = req.body;
  const newUser = new User({ firstName, lastName, email });

  newUser
    .save()
    .then(() => res.json('User added!'))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = app;
