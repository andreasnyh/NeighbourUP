const User = require('../models/user.model');

const index = (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(`Error: ${err}`));
};

const detail = (req, res) => {
  if (req.params.email) {
    User.find({ email: req.params.email })
      .then((user) => {
        console.log('från params', user);
        res.json(user);
      })
      .catch((err) => res.status(404).json(`Error: ${err}`));
  } else if (req.body.email) {
    User.find({ email: req.body.email })
      .then((user) => {
        console.log('från body:', user);
        res.json(user);
      })
      .catch((err) => res.status(404).json(`Error: ${err}`));
  }
};

const notFound = (req, res) => {
  return res.status(404).json(`Not found`);
};

module.exports = { index, detail, notFound };
