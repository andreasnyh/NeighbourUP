// const { MongoClient } = require('mongodb');
require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');

// const User = require('./models/user.model');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

//Connection to MongoDB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

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

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
