const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  adress: {
    type: String,
    trim: true,
    required: true,
  },
  coAdress: {
    type: String,
    trim: true,
    required: false,
  },
  email: {
    type: String,
    trim: true,
    index: {
      unique: true,
    },
    required: true,
  },
  firstName: {
    type: String,
    trim: true,
    minlength: 2,
    required: true,
  },
  lastName: {
    type: String,
    trim: true,
    minlength: 2,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
  postalAdress: {
    type: String,
    trim: true,
    required: true,
  },
  postalNumber: {
    type: Number,
    trim: true,
    required: true,
    minlength: 5,
    maxlength: 5,
  },
});

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;
