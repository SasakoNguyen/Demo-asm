var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // check login or not 
  let authented = req.session.authented;
  if (authented) {
    res.render('users', { title: 'Users page' });
  } else {
    res.redirect('/login');
  }
});

module.exports = router;