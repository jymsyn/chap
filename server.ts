require('dotenv').config({ silent: true });
import express = require('express');
import favicon = require('serve-favicon');
import logger = require('morgan');
import cookieParser = require('cookie-parser');
import bodyParser = require('body-parser');
var path = require("path");
const app = express();

import mongoose = require('mongoose');
require('./models/user');
require('./models/hairstyle');
require('./models/appointment');
require('./config/passport')

mongoose.connect(process.env.DB)

//go to this stackoverflow question to solve the mlab connection timeout situation
//http://stackoverflow.com/questions/42320968/heroku-nodejs-mongoose-and-mlab-app-crash-with-timeout 


// view engine setup
app.set('views', './views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'src', 'favicon.ico')));
if (process.env.NODE_ENV !== 'test') app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//API Routes
import users from './api/userRoutes';
import hairstyles from './api/hairstyleRoutes';
import appointments from './api/appointmentRoutes';
import igurl from './api/getIGPhotoAPI';
import twilio from './api/twilioApi';

app.use('/api/v1/users', users);
app.use('/api/v1/hairstyles', hairstyles);
app.use('/api/v1/appointments', appointments);
app.use('/api/v1/igurl', igurl);
app.use('/api/v1/twilio', twilio);


app.use(express.static('./src'));
app.use('/scripts', express.static('bower_components'));

app.get('/*', function(req, res, next) {
  if (/.js|.html|.css|templates|js|scripts/.test(req.path) || req.xhr) {
    return next({ status: 404, message: 'Not Found' });
  } else {
    return res.render('index');
  }
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err['status'] = 404;
  next(err);
});

// error handlers
app.use(function(err: any, req, res, next) {
  res.status(err.status || 500);
  // Don't leak stack trace if not in development
  let error = (app.get('env') === 'development') ? err : {};
  res.send({
    message: err.message,
    error: error
  });
});

export = app;
