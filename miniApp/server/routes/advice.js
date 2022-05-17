const router = require('express').Router();
const controller = require('../controllers');

router.post('/', controller.advice.post);

module.exports = router;


