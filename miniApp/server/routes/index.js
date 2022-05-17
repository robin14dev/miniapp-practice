const express = require('express');
const router = express.Router();
const weatherRouter = require('./weather');
const adviceRouter = require('./advice');

router.use('/weatherInfo', weatherRouter);
router.use('/advice', adviceRouter);

module.exports = router;
