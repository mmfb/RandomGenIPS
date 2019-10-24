var express = require('express');
var randomNumberGen = require('../models/randomNumber');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send({ number:randomNumberGen.genRandomNumber()});
});

module.exports = router;