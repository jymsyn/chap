'use strict';
import express = require('express');
import jwt = require('express-jwt');
const GetIGPic = require('get-instagram-photo');
let mongoose = require('mongoose');
let router = express.Router();
let Hairstyle = mongoose.model('Hairstyle');
let User = mongoose.model('User');
let auth = jwt({
  userProperty: 'payload',
  secret: process.env.JWT_SECRET
});

//POST: /api/v1/hairstyles
router.post('/', auth, (req, res, next) => {
  GetIGPic(req.body.igurl).then(image => {
    let newHairstyle = new Hairstyle(req.body);
    newHairstyle.name = req.body.name;
    newHairstyle.price = req.body.price;
    newHairstyle.duration = req.body.duration;
    newHairstyle.description = req.body.description;
    newHairstyle.img = req.body.img;
    newHairstyle.igimg = image;
    newHairstyle.createdBy = req['payload']._id;
    console.log(`This is the newhairstyle: ${newHairstyle.igimg}`);
    newHairstyle.save((err, hairstyle)=>{
      if(err) return next(err);
      User.update({_id: req['payload']._id}, { $push: {'hairstyles': hairstyle._id}}, (err, results) =>{
          if (err) next(err);
          res.send(hairstyle);
      });
    });
  }).catch((err) => {
    console.error("Sorry, but your instagram url has to come from a public profile. Private images cannot be accessed, (including yours), unless you allow chap to verify with your account", err)
  })
});

//GET: /api/v1/hairstyles
router.get('/user', auth, (req,res, next) => {
  Hairstyle.find({ createdBy: req['payload']._id })
  .exec((err, hairstyles)=>{
    if (err) return next(err);
    res.json(hairstyles);
  });
});

//GET: /api/v1/hairstyles/:id  [single hairstyle]
router.get('/:id', (req, res, next) => {
  Hairstyle.findOne({ _id: req.params.id }).exec((err, hairstyle) => {
    if(err) return next(err);
    res.send(hairstyle)
  });
});

//PUT: /api/v1/hairstyles/:id
router.put('/:id', (req, res, next) => {
  Hairstyle.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true}, (err, result) => {
    if (err) return next(err);
    if (!result) return next({message: 'Could not find and update the hairstyle.'});
    res.send(result);
  })
})

//DELETE: /api/v1/hairstyles/:id
router.delete('/', (req,res,next) => {
  console.log(req.query._id);
  if (!req.query._id) return next({ status: 404, message: 'Please include an ID'});
  Hairstyle.remove({ _id: req.query._id }, (err, result) =>{
    if (err) return next(err);
    res.send({ message: 'deleted the hairstyle'});
  });
});

export default router;