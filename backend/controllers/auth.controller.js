const User = require('../models/user.model');

const login = (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    console.log('authLogin', email, password);

    User.find({ email, password })
      .then((user) => {
        if (user.length === 0) {
          res.status(404).end('Kontrollera email och/eller lösenord :)');
        } else {
          res.status(200).send('Inloggad');
        }
      })
      .catch((err) => res.status(400).json(`Error: ${err}`));
  } else res.send('Fyll i alla fält!');
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
