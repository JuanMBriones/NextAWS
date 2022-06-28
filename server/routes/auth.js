const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();

// import controllers
const {register} = require('../controllers/auth');

router.get('/register', register);

module.exports = router;
