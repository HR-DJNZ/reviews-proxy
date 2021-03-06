var express = require('express');
var bodyParser= require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/../public'));

app.listen(3000, () => {
  console.log('listening on port 3000');
});

module.exports = app;