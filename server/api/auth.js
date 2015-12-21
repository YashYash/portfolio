/***************************************************

CREATED_BY: Yash Saxena

AUTHENTICATION APIS
- CRUD for accounts
- Change password
- Admin user creation
- Dummy user creation

URL NAME SPACE
/auth/...

***************************************************/

/**
 * Dependencies
 */
var mongoose  =  require('mongoose'),
    passport  =  require('passport'),
    Account   =  require('../models/account'),
    async     =  require('async'),

    // Initiate express router
    express   = require('express'),
    router    = express.Router()


/**
 * Register Account
 * POST
 * REQUEST BODY - email, password, images : {profile}
 * RESPONSE - registered/saved account
 */

router.post('/register', function(req, res) {
	console.log("#### Registering here");
	console.log(req.body.email);
	res.send({'data':'DATA'});
});

/**
 * Login to Account
 * POST
 * REQUEST BODY - email, password
 * RESPONSE - logged in account
 */

router.post('/login', function(req, res) {
	console.log("#### logging in here");
	res.send('DATA');
})



module.exports = router;