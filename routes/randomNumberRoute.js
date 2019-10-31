var express = require('express');
var randomNumberGen = require('../models/randomNumber');
var router = express.Router();

// Generates one random number between 0 and 1
router.get('/', function(req, res, next) {
    res.send({ number:randomNumberGen.genRandomNumber()});
});

router.get('/top/:top', function(req, res, next) {
    res.send({ number:randomNumberGen.
        genRandomNumber(parseFloat(req.params.top))});
});

router.get('/min/:min/max/:max', function(req, res, next) {
    res.send({ number:randomNumberGen.
        genRandomNumber(parseFloat(req.params.min),
        parseFloat(req.params.max))});
});

router.get('/:quant', function(req, res, next) {
    res.send({ numbers:randomNumberGen.genRandomNumbers(parseInt(req.params.quant))});
});

router.get('/:quant/top/:top', function(req, res, next) {
    res.send({ numbers:randomNumberGen.
        genRandomNumbers(parseInt(req.params.quant),parseFloat(req.params.top))});
});

router.get('/:quant/min/:min/max/:max', function(req, res, next) {
    res.send({ numbers:randomNumberGen.
        genRandomNumbers(parseInt(req.params.quant),parseFloat(req.params.min),
        parseFloat(req.params.max))});
});



module.exports = router;