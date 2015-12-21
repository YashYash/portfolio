/***************************************************

CREATED_BY: Yash Saxena

ACCOUNT SCHEMA
The blueprint of an account

- Schema
- Pre save password hashing

***************************************************/

var mongoose              = require('mongoose'),
    Schema                = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose'),
    bcrypt                = require('bcrypt'),
    SALT_WORK_FACTOR      = 10;

var Account = new Schema({
  email: String,
  password: String,
  name: {
    first: String,
    last: String
  },
  images: {
    profile: String,
    thumbnail: String,
    background: String
  },
  created: {
    type: Date,
    default: Date.now
  },
  modified: Date
});

Account.plugin(passportLocalMongoose);

// Hash the password prior to saving
Account.pre('save', function(next) {
  var account = this;
  if(!account.isModified('password')) return next();
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
      if (err) return next(err);

      // hash the password along with our new salt
      bcrypt.hash(account.password, salt, function(err, hash) {
          if (err) return next(err);

          // override the cleartext password with the hashed one
          account.password = hash;
          next();
      });
  });  
});

// Authenticate password
Account.methods.comparePassword = function(password, cb) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if(err) {
      console.log(err);
      return cb(err);
    } else {
      cb(null, isMatch);
    }
  });
};

module.exports = mongoose.model('Account', Account);
