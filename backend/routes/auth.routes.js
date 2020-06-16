const express = require('express');

const app = express();
const authController = require('../controllers/auth.controller');

// create application/json parser
const jsonParser = express.json();
app.use(jsonParser);

// create application/x-www-form-urlencoded parser
const urlencodedParser = express.urlencoded({ extended: false });
app.use(urlencodedParser);

app.post('/login', authController.login);

app.post('/signup', authController.signup);

module.exports = app;
