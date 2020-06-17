const express = require('express');

const { check } = require('express-validator');

const app = express();
const authController = require('../controllers/auth.controller');

// create application/json parser
const jsonParser = express.json();
app.use(jsonParser);

// create application/x-www-form-urlencoded parser
const urlencodedParser = express.urlencoded({ extended: false });
app.use(urlencodedParser);

// check('what in req', 'message if error').typeOfCheck()
app.post(
  '/login',
  [
    check('email', 'Email is required bro!').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters!'
    ).isLength({ min: 6 }),
  ],
  authController.login
);

app.post('/signup', authController.signup);

module.exports = app;
