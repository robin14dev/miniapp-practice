const router = require('express').Router();
const controller = require('../controllers');

router.post('/', controller.weather.post);

module.exports = router;


