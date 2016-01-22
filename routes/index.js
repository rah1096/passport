var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Please log in' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Create an Account' });
});

router.get('/dashboard', function(req, res, next) {
  res.render('dashboard', { title: 'Dashboard', layout: 'Dashboard_layout' });
});

router.post('/register', function(req, res, next) {
  //console.log(req.body.name);
  //res.send(200);

  var name = req.body.name;
  var email = req.body.email;
  var username = req.body.username;
  var password = req.body.password;
  var password2 = req.body.password2;

  req.checkBody('name', 'Name field is required').notEmpty();
  req.checkBody('email', 'Email field is required').notEmpty();
  req.checkBody('email', 'Email must be valid email address').notEmpty();
  req.checkBody('username', 'Username field is required').notEmpty();
  req.checkBody('password', 'Password field is required').notEmpty();
  req.checkBody('password2', 'Passwords do not match').notEmpty();

});

module.exports = router;
