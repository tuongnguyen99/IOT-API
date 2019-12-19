const express = require('express');
const controller = require('../controllers/notes.controller');
var router = express.Router();

router.post('/add', controller.add);
router.get('/list/:userId', controller.get);
router.put('/update/:noteId', controller.update);
router.delete('/delete/:noteId', controller.delete);

module.exports = router;
