const express = require('express');
const controller = require('../controllers/users.controller');
var router = express.Router();

router.post('/', controller.add);
router.post('/login', controller.login);
router.put('/update/:userId', controller.update);
router.delete('/delete/:userId', controller.delete);


module.exports = router;
