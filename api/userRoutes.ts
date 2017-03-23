import * as express from 'express';
import passport = require('Passport');
import jwt = require('express-jwt');
let auth = jwt({
  userProperty: 'payload',
  secret: process.env.JWT_SECRET
})

import User from '../models/user';
let router = express.Router();

//Register new user
router.post('/register', (req, res, next) => {
  let user = new User();
  user.username = req.body.username;
  user.email = req.body.email;
  user.profession = req.body.profession;
  user.setPassword(req.body.password);
  user.save((err, user) => {
    if (err) return next(err);
    res.send({token: user.generateJWT()})
  })
})

//Login existing user
router.post('/login', (req, res, next) => {
  if(!req.body.username || !req.body.password) return res.status(400).send('Please fill out every field');
  passport.authenticate('local', (err, user, info) => {
    console.log(user);
    if(err) return next(err);
    if(user) return res.json({ token: user.generateJWT() });
    return res.status(400).send(info)
  })(req, res, next); //Ask why we need to call this function with the req res and next parameters
});

//get single user information
router.get('/:username', (req, res, next) => {
  User.findOne({ username: req.params.username }, { passwordHash: 0, salt: 0})
  .populate('hairstyles', 'igimg name description price')
  .exec((err, user) => {
    if (err) return next(err);
    if (!user) return next({message: 'no users'});
    res.send(user);
  })
});

//update user information
router.put('/', auth, (req, res, next) => {
  User.findOneAndUpdate({ _id: req.body._id }, req.body, {new: true}, (err, result) => {
    if (err) return next(err);
    if (!result) return next({message: 'Could not find and update the user.'});
    res.send(result);
  })
})

//update barber's isTakingWalkins
router.put('/status', auth, (req, res, next) => {
  User.findOneAndUpdate({ _id: req['payload']._id}, req.body, {new:true}, (err, results) => {
    if (err) return next(err);
    if(!results) return next({message: 'Error trying to set walkin status'});
    res.send(results)
  })
})

export default router;