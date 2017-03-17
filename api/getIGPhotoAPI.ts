'use strict';
import express = require('express');
import jwt = require('express-jwt');
const GetIGPic = require('get-instagram-photo');
let auth = jwt({
  userProperty: 'payload',
  secret: process.env.JWT_SECRET
});

let router = express.Router();

router.post('/', (req, res, next) => {
  console.log(req.body);
  GetIGPic(req.body.url).then(image=>{
    if(image !== undefined || image !== null || image !== "") {
      console.log(`Successfully retrieved image: ${image}`)
      let igurlobj = {};
      igurlobj.image = image;
      res.send(igurlobj);
    } else {
      console.log("cannot save image because you are trying to save a private image. Please make your profile public")
    }
  }).catch((err) => {
    console.error(err);
    res.status(500).send('cannot save image because instagram profile is private.')
  });
})

export default router;