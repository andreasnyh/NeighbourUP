const express = require('express');
const cors = require('cors');

const app = express();
const { connect } = require('./index');

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Router
const userRouter = require('./routes/users.routes');
const authRouter = require('./routes/auth.routes');

// Routes
app.use('/users', userRouter);
app.use('/auth', authRouter);

connect().then(
  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  })
);
