var express = require('express');
var router = express.Router();
//call controller
var userController = require('../../controller/user.controller')

router.get('/getUsers', userController.getUsers);

router.post('/createUser', userController.createUser);

router.put('/updateUser/:id', userController.updateUser);

router.delete('/deleteUser/:id', userController.deleteUser);

module.exports = router;
