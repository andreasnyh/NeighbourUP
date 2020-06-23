const { check } = require('express-validator');

const loginValidationOptions = [
  check('email', 'Kontrollera epostadress!').isEmail(),
  check('password', 'Ange ett lösenord!').not().isEmpty(),
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
