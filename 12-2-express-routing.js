var express = require('express');
var app = express();

var admin = require('./routes/admin');
app.use('/', admin);

require('./routes/index.js');

app.listen(3000);