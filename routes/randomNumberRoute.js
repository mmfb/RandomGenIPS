var express = require('express');
var randomNumberGen = require('../models/randomNumber');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send({ number:randomNumberGen.genRandomNumber()});
});


router.get('/:top', function(req, res, next) {
    res.send({ number:randomNumberGen.
        genRandomNumber(parseFloat(req.params.top))});
});

router.get('/:min/:max', function(req, res, next) {
    console.log(req.params.min+" "+req.params.max)
    res.send({ number:randomNumberGen.
        genRandomNumber(parseFloat(req.params.min),
        parseFloat(req.params.max))});
});
module.exports = router;