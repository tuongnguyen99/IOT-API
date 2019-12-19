var models = require('../models/db.models');

module.exports = {
  add: function(req, res, next) {
    models.user.create(req.body, (err, user) => {
      if (err) {
        res.send(err);
        return;
      }
      res.send(user);
    });
  },
  update: function(req, res, next) {
    models.user.update({
        _id: req.params.userId
      }, req.body)
      .exec((err, result) => {
        if (err) {
          res.send(err);
          return;
        };
        res.send(result);
      });
  },
  delete: function(req, res, next) {
    models.user.remove({
        _id: req.params.userId
      })
      .exec((err, result) => {
        if (err) {
          res.send(err);
          return;
        };
        res.send(result);
      });
  },
  login: function(req, res, next) {
    var user = {
      username: req.body.username,
      password: req.body.password,
    };
    models.user.find(user)
      .exec((err, result) => {
        if (err) {
          res.send(err);
          return;
        };
        res.send(result);
      })
  }
}
