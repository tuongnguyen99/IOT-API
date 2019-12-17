var models = require('../models/db.models');

module.exports = {
  getNote: function(req, res, next) {
    models.note.find().exec((err, users) => {
      if (err) {
        res.send(err);
        return;
      };
      res.send(users);
    });
  },
  addNote: function(req, res, next) {
    models.note.create(req.body, (err, user) => {
      if (err) {
        res.send(err);
        return;
      }
      res.send(user);
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
