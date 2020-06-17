const { check } = require('express-validator');

const loginValidationOptions = [
  check('email', 'A valid email is required!').isEmail(),
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
  check('lastName').trim().escape().isLength({ min: 2 }),
  check('adress').trim().escape().isLength({ min: 2 }),
  check('coAdress').trim().escape(),
  check('postalNumber')
    .trim()
    .isNumeric([{ no_symbols: true }])
    .isLength({ min: 5, max: 5 }),
  check('postalAdress').trim().escape().isLength({ min: 2 }),
];

module.exports = { registerValidationOptions, loginValidationOptions };
