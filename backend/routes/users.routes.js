const express = require('express');

const router = express();
const userController = require('../controllers/user.controller');

// create application/json parser
const jsonParser = express.json();
router.use(jsonParser);

// create application/x-www-form-urlencoded parser
const urlencodedParser = express.urlencoded({ extended: false });
router.use(urlencodedParser);

router.get('/', userController.index);

router.post('/find/:email', userController.detail);
router.post('/find', userController.detail);

router.get('/*', userController.notFound);

module.exports = router;
