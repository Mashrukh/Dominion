var express = require('express');
var router = express.Router();

//Imports
var GameSerivce = require('../Services/gameService.js');

router.get('/', function(req, res, next) {
    res.send(initialize());
});

function initialize() {
    var gameService = new GameSerivce();
    var result = gameService.initialize();
    return result;
  }

module.exports = router;