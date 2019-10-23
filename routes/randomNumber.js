var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send({ number:Math.random()});
});

module.exports = router;