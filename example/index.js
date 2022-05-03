var path = require('path');
var express = require('express');
var expressLayouts = require('..');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout extractScripts', true)
app.set('layout extractStyles', true)

app.use(expressLayouts);

app.get('/', function(req, res) {
  res.locals = {
    title: 'This is a first view',
    message: 'This is a first message'
  };
  res.render('view', {
    // additional locals, a custom layout, or other options can be defined here
  });
});

app.get('/another', function(req, res) {
  res.locals = {
    title: 'This is a second view',
    message: 'This is a second message'
  };
  res.render('another-view', {
    // additional locals, a custom layout, or other options can be defined here
  });
});

app.get('/other', function(req, res) {
  res.locals = {
    title: 'This is a third view',
    message: 'This is a third message'
  };
  res.render('other-view', {
    // additional locals, a custom layout, or other options can be defined here
  });
});

var port = 8080;
app.listen(port, function() {
  console.log('Listening on http://localhost:%s/', port);
});
