var express = require('express');
var router = express.Router();

var cricketController = require('../../controller/cricket.controller')

router.get('/matchpoints', cricketController.getMatches);

module.exports = router;