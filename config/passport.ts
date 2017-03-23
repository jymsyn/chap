"use strict"
var passport = require('passport');
import mongoose = require('mongoose');
let LocalStrategy = require('passport-local').Strategy;
let User = mongoose.model('User');

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(new LocalStrategy(function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if(err) return done(err);
      if(!user) return done(null, false, { data: 'Cannot find that username in our system.' });
      if(!user.validatePassword(password)) return done(null, false, { data: 'Password does not match.' });
      return done(null, user);
    });
}));

