var models = require('../models/db.models');

module.exports = {
  add: function(req, res, next) {
    models.note.create(req.body, (err, note) => {
      if (err) {
        res.send(err);
        return;
      }
      res.send(note);
    });
  },
  delete: function(req, res, next) {
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
  update: function(req, res, next) {
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
  },
  get: function(req, res, next) {
    models.note.find({
      userId: req.params.userId
    }).exec((err, notes) => {
      if (err) {
        res.send(err);
        return;
      }
      res.send(notes);
    });
  },
  detail: function(req, res, next) {
    models.note.find({
      _id: req.params.Id
    }).exec((err, note) => {
      if (err) {
        res.send(err);
        return;
      }
      res.send(note[0]);
    });
  }
}
