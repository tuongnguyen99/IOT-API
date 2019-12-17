var mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true});

const userSchema = new mongoose.Schema({
  username: String,
  password: String
});

const noteSchema = new mongoose.Schema({
  title: String,
  content: String,
  criticalLevel: String,
  date: { type: Date, default: Date.now }
});

module.exports = {
  user: mongoose.model('user', userSchema),
  note: mongoose.model('note', noteSchema)
};
