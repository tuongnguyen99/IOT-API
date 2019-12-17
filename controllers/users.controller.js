var models = require('../models/db.models');

module.exports = {
  getUsers: function(req, res, next) {
    models.user.find().exec((err, users) => {
      if (err) {
        res.send(err);
        return;
      };
      res.send(users);
    });
  },
  addUser: function(req, res, next) {
    models.user.create(req.body, (err, user) => {
      if (err) {
        res.send(err);
        return;
      }
      res.send(user);
    });
  },
  detail: function (req, res, next) {
    models.user.find({_id: req.params.userId}).exec((err, user) => {
      if (err) {
        res.send(err);
        return;
      }
      res.send(user);
    });
  },
  deleteUser: function(req, res, next) {
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
  updateUser: function(req, res, next) {
    console.log(req.params.userId);
    console.log(req.body);
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
  }
}
