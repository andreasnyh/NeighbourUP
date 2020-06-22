const bcrypt = require('bcryptjs');
const User = require('../models/user.model');

const login = (req, res) => {
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

const signup = async (req, res) => {
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
  const userExists = await User.findOne({ email });

  if (userExists) {
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

  // Password encryption
  const salt = await bcrypt.genSalt(10);

  newUser.password = await bcrypt.hash(password, salt);

  // Save user to DB
  return newUser
    .save()
    .then(() => res.status(201).json(newUser))
    .catch((err) => {
      console.log(err.message);
      res.status(400).json(`Error saving user!`);
    });
};

module.exports = { login, signup };
