"use strict";
import mongoose = require('mongoose');

let AppointmentSchema = new mongoose.Schema({
  customerFirstname: { type: String },
  customerLastname: { type: String },
  hairstyle: { type: mongoose.Schema.Types.ObjectId, ref: 'Hairstyle'},
  phone: {type: Number},
  appointmentDate: { type: String },
  appointmentTime: { type: String},
  barber: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  message: { type: String },
  date: { type: String },
  status: {
    enum: ['cancelled', 'active', 'complete'],
    type: String
    // required: true
  }
});

export let Appointment = mongoose.model('Appointment', AppointmentSchema);
