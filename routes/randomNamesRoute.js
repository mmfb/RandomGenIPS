var express = require('express');
var randomNameGen = require('../models/randomNames');
var router = express.Router();

// Generates one random name 
router.get('/random', function(req, res, next) {
    randomNameGen.getRandomName(function(name) {
        res.send(name);
    }); 
});

router.get('/genders', function(req, res, next) {
    randomNameGen.getGenders(function(genders) {
        res.send(genders);
    }); 
});

router.get('/types', function(req, res, next) {
    randomNameGen.getTypes(function(types) {
        res.send(types);
    }); 
});

router.post('/', function(req, res, next) {
    randomNameGen.saveName(req.body,function(result) {
        res.send(result);
    })
})

module.exports = router;