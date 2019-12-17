var models = require('../models/db.models');

module.exports = {
  getNote: function(req, res, next) {
    models.note.find().exec((err, notes) => {
      if (err) {
        res.send(err);
        return;
      };
      res.send(notes);
    });
  },
  addNote: function(req, res, next) {
    models.note.create(req.body, (err, note) => {
      if (err) {
        res.send(err);
        return;
      }
      res.send(note);
    });
  },
  detail: function (req, res, next) {
    models.note.find({_id: req.params.noteId}).exec((err, note) => {
      if (err) {
        res.send(err);
        return;
      }
      res.send(note);
    });
  },
  deleteNote: function(req, res, next) {
    models.note.remove({
        _id: req.params.noteId
      })
      .exec((err, result) => {
        if (err) {
          res.send(err);
          return;
        };
        res.send(result);
      });
  },
  updateNote: function(req, res, next) {
    console.log(req.params.userId);
    console.log(req.body);
    models.note.update({
        _id: req.params.noteId
      }, req.body)
      .exec((err, result) => {
        if (err) {
          res.send(err);
          return;
        };
        res.send(result);
      });
  }
}
