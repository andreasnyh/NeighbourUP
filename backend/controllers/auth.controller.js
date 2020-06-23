const bcrypt = require('bcryptjs');
const User = require('../models/user.model');

const login = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Kontrollera email och/eller lösenord!' }] });
      }

      return bcrypt
        .compare(password, user.password)
        .then((isMatch) => {
          console.log(isMatch);
          if (!isMatch) {
            return res.status(400).json({
              errors: [{ msg: 'Kontrollera email och/eller lösenord!' }],
            });
          }
          return res.status(200).json({ msg: 'Inloggad!' });
        })
        .catch((err) => console.log(err.message));
    })
    .catch((err) => console.log(err.message));
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

  // Check if user already exists
  User.findOne({ email }).then((user) => {
    if (user) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'Denna email är redan registrerad!' }] });
    }

    // Create a user object
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

    // Password encryption & save user
    return bcrypt.genSalt(10).then((salt) => {
      bcrypt
        .hash(password, salt)
        .then((hashedPW) => {
          newUser.password = hashedPW;
        })
        .then(() => {
          newUser
            .save()
            .then(() => res.status(201).json(newUser))
            .catch((err) => {
              console.log(err.message);
              res.status(400).json(`Error saving user!`);
            });
        });
    });
  });
};

module.exports = { login, signup };
