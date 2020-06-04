// const { MongoClient } = require('mongodb');
require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

// Testing
const { MongoMemoryServer } = require('mongodb-memory-server');

// const User = require('./models/user.model');
const uri = process.env.ATLAS_URI;

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connection to MongoDB
async function connect() {
  if (process.env.NODE_ENV === 'test') {
    const mongoServer = new MongoMemoryServer();
    mongoServer.getUri().then((mongoUri) => {
      mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      });
      mongoose.connection.on(
        'error',
        console.error.bind(console, 'connection error:')
      );
      mongoose.connection.once('open', () => {
        console.log(
          'Fake database connection established successfully \n @',
          mongoUri
        );
      });
    });
  } else {
    // return new Promise((resolve, reject) => {
    mongoose.connect(uri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    // .then((res, err) => {
    //   if (err) return reject(err);
    //   resolve();
    // });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
      console.log('MongoDB database connection established successfully');
    });
    // });
  }
}

function close() {
  return mongoose.disconnect();
}

// Router
const userRouter = require('./routes/user');

// Routes
app.use('/user', userRouter);

connect().then(
  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  })
);

module.exports = { connect, close, app };
