const express = require('express');
const controller = require('../controllers/notes.controller');
var router = express.Router();

router.get('/', controller.getNote);
router.post('/', controller.addNote);
router.put('/:noteId', controller.updateNote);
router.delete('/:noteId', controller.deleteNote);

module.exports = router;
