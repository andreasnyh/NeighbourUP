// const { MongoClient } = require('mongodb');
require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/user.model');

const dbUser = process.env.REACT_APP_DBUSER;
const dbPass = process.env.REACT_APP_DBPASS;
const dbName = process.env.REACT_APP_DBNAME;
const dbHost = process.env.REACT_APP_DBHOST;

const uri = `mongodb+srv://${dbUser}:${dbPass}@${dbHost}.mongodb.net/${dbName}?retryWrites=true&w=majority`;

// Do we need this??
// mongoose.Promise = global.Promise;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const addUser = new User({
  firstName: 'Mongoose User',
  lastName: 'With model&schema',
  email: 'mon@goose.com',
});

addUser.save((err, doc) => {
  if (err) return console.log(err);
  console.log(doc._id.getTimestamp());
  return console.log('User added: \n', doc);
});
