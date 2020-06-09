const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  adress: {
    type: String,
    required: true,
  },
  coAdress: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },
  password: {
    type: String,
    required: true,
  },
  postalAdress: {
    type: String,
    required: true,
  },
  postalNumber: {
    type: Number,
    required: true,
    minlength: 5,
    maxlength: 5,
  },
});

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;
