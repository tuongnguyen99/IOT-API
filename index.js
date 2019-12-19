const express = require('express');
require('dotenv').config();
var bodyParser = require('body-parser');
const userRoute = require('./routes/users.route');
const noteRoute = require('./routes/notes.route');


const port = process.env.PORT;

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use('/user', userRoute);
app.use('/note', noteRoute);

app.listen(port, () => {
  console.log('server listeing on port ' + port);
});
