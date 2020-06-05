const express = require('express');
const cors = require('cors');

const app = express();
const { connect } = require('./db/index');

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Router
const userRouter = require('./routes/user');

// Routes
app.use('/user', userRouter);

connect().then(
  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  })
);
