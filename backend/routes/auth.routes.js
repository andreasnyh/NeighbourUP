const express = require('express');

const { validate } = require('../validate');
const {
  loginValidationOptions,
  registerValidationOptions,
} = require('../validation.options');

const app = express();
const authController = require('../controllers/auth.controller');

// create application/json parser
const jsonParser = express.json();
app.use(jsonParser);

// create application/x-www-form-urlencoded parser
const urlencodedParser = express.urlencoded({ extended: false });
app.use(urlencodedParser);

// check('what in req', 'message if error').typeOfCheck()
app.post('/login', validate(loginValidationOptions), authController.login);

app.post('/signup', validate(registerValidationOptions), authController.signup);

module.exports = app;
