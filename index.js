const express = require('express');
require('dotenv').config();
var bodyParser = require('body-parser');
const userRoute = require('./routes/users.route');
const noteRoute = require('./routes/notes.route');
const auth404 = require('./auths/not-found.auth');

const port = process.env.PORT;

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/user', userRoute);
app.use('/note', noteRoute);
app.use(auth404);

app.listen(port, () => {
  console.log('server listening on port ' + port);
});
