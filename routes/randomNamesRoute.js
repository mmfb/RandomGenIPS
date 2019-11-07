var express = require('express');
var randomNameGen = require('../models/randomNames');
var router = express.Router();

// Generates one random name 
router.get('/', function(req, res, next) {
    randomNameGen.getRandomName(function(name) {
        res.send(name);
    }); 
});

router.post('/', function(req, res, next) {
    randomNameGen.saveName(req.body,function(result) {
        res.send(result);
    })
})

module.exports = router;