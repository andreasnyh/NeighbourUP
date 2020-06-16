const express = require('express');
const User = require('../db/models/user.model');

const app = express();

// create application/json parser
const jsonParser = express.json();
app.use(jsonParser);

// create application/x-www-form-urlencoded parser
const urlencodedParser = express.urlencoded({ extended: false });
app.use(urlencodedParser);

app.post('/authLogin', (req, res) => {
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
});

module.exports = app;
