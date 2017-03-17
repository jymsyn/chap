import mongoose = require('mongoose');
import crypto = require('crypto');
import jwt = require("jsonwebtoken");

export interface IUser extends mongoose.Document {
  username: string;
  email: string;
  passwordHash: string;
  salt: string;
  role: 'provider' | 'client' | 'admin';
}

let UserSchema = new mongoose.Schema({
  username: { type: String, lowercase: true, unique: true},
  email: { type: String, unique: true, lowercase:true},
  passwordHash: String,
  salt: String,
  firstName: String,
  lastName: String,
  phone: String,
  igurl: String,
  img: String,
  storeName: String,
  website: String,
  address: String,
  location: {},
  hairstyles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Hairstyle'}],
  appointments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Appointment'}],
  appointmentDays: [{ type: mongoose.Schema.Types.ObjectId, ref: 'AppointmentDays'}],
  availabilityEndDate: Date,
  role: {
    enum: ['provider', 'client', 'admin'],
    type: String
    // required: true
  }
})

UserSchema.method('setPassword', function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.passwordHash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha1').toString('hex');
})

UserSchema.method('validatePassword', function(password){
  let hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha1').toString('hex');
  return (hash === this.passwordHash);
});

UserSchema.method('generateJWT', function(){
  return jwt.sign({
    _id: this._id,
    username: this.username,
    email: this.email
  }, 'SecretKey')
})

export default mongoose.model<IUser>('User', UserSchema);