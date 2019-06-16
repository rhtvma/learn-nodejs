var express = require('express');
var router = express.Router();
var usersRoute = require('./users/users.router');
var cricketRoute = require('./cricket/cricket.router');

router.use('/users', usersRoute);
router.use('/cricket', cricketRoute);

module.exports = router;
