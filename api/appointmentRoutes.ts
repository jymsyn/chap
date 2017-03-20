'use strict';
import express = require('express');
import jwt = require('express-jwt');
let mongoose = require('mongoose');
let router = express.Router();
let Appointment = mongoose.model('Appointment');
let User = mongoose.model('User');
let auth = jwt({
  userProperty: 'payload',
  secret: process.env.JWT_SECRET
});

//POST: /api/v1/appointments
//Saving appointment | first find if barber exists
router.post('/', (req, res, next) =>{
  console.log(`Saving appointment to database ${req.body.barber}`);
  console.log(`Searching for ${req.body.barber}`);
  User.findOne({ _id: req.body.barber })
  .exec((err, user)=>{
    console.log(`Found user: ${user}`)
    if(err) return next(err);
    if (!user) return next({ status: 404, message: 'No user found'});
    req['user'] = user;
    next();
  });
});

//When user exists, post appointment
router.post('/', (req, res, next) =>{
  console.log(`Saving appointment: ${req.body}`)
  let appointment = new Appointment(req.body);
  appointment.save((err, appt)=>{
    console.log(appt)
    if (err) return next(err);
    if (!appt) return next({ message: 'Error saving appointment.'});
    req['user'].appointments.push(appt._id);
    req['user'].save();
    res.send(appt);
  })
})


//GET: User's appointments
router.get('/', auth, (req,res, next) => {
  Appointment.find({ barber: req['payload']._id })
  .populate('hairstyle', 'name price')
  .exec((err, appointments)=>{
    if (err) return next(err);
    res.json(appointments);
  });
});

router.put('/', auth, (req, res, next) => {
  Appointment.findOneAndUpdate({ _id: req.body._id }, req.body, {new: true}, (err, result) => {
    if (err) return next(err);
    if (!result) return next({message: 'Could not find and update the appointment status.'});
    res.send(result)
  })
})

export default router;
