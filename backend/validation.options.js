const { check } = require('express-validator');

const loginValidationOptions = [
  check('email', 'Email is required bro!').isEmail(),
  check(
    'password',
    'Please enter a password with 6 or more characters!'
  ).isLength({ min: 6 }),
];

const registerValidationOptions = [
  check('email')
    .isEmail()
    .normalizeEmail()
    .trim()
    .escape()
    .withMessage('Email is not valid'),

  check('firstName').trim().escape().isLength({ min: 2 }),
  check('lastName').trim().escape(),
  check('Adress').trim().escape(),
  check('coAdress').trim().escape(),
  check('postalNumber')
    .trim()
    .isNumeric([{ no_symbols: true }])
    .isLength({ min: 5, max: 5 }),
  check('postalAdress').trim().escape(),
];

module.exports = { registerValidationOptions, loginValidationOptions };
