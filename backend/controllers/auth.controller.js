const { validationResult } = require('express-validator');
const User = require('../models/user.model');

const login = (req, res) => {
  // if the check in the route fails return one or more errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  return User.find({ email, password })
    .then((user) => {
      if (user.length === 0) {
        res.status(404).end('Kontrollera email och/eller lösenord :)');
      }
      res.status(200).end('Inloggad');
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
};

const signup = (req, res) => {
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
    .then(() => res.status(201).json(newUser))
    .catch((err) => {
      console.log(err.message);
      res.status(400).json(`Error saving user`);
    });
};

module.exports = { login, signup };
