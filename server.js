process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose'),
    express = require('./config/express');

var db = mongoose();
var app = express();

app.listen(8080, function(){
  console.log('Sevidor ejecutándose en http://localhost:8080');
});
//federico
module.exports = app;
