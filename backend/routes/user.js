const router = require('express').Router();
const User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/add').post((req, res) => {
  const { firstName, lastName, email } = req.body;

  const newUser = new User({ firstName, lastName, email });

  newUser
    .save()
    .then(() => res.json('User added!'))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;

// const addUser = new User({
//   firstName: 'Mongoose User',
//   lastName: 'With model&schema',
//   email: 'mon@goose.com',
// });

// addUser.save((err, doc) => {
//   if (err) return console.log(err);
//   console.log(doc._id.getTimestamp());
//   return console.log('User added: \n', doc);
// });
