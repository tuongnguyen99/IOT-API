const express = require('express');
const controller = require('../controllers/users.controller');
var router = express.Router();

router.get('/', controller.getUsers);
router.post('/', controller.addUser);
router.get('/:userId', controller.detail);
router.put('/:userId', controller.updateUser);
router.delete('/:userId', controller.deleteUser);


module.exports = router;
