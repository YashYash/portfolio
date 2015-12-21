/***************************************************

CREATED_BY: Yash Saxena

ANGULAR APP: Dashboard

***************************************************/

var express = require('express'),
    router  = express.Router()

/* GET dashboard page. */
router.get('', function(req, res, next) {
  res.render('dashboard', {
    title: 'Dashboard'
  });
});

module.exports = router;
