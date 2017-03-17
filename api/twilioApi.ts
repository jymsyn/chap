import express = require('express');
import jwt = require('express-jwt');
let client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
let auth = jwt({
  userProperty: 'payload',
  secret: process.env.JWT_SECRET
});

let router = express.Router();

const twilioNumber = process.env.TWILIO_NUM;

router.post('/', auth, (req, res, next) => {
  let message;
  
  //generate message
  if(req.body.messageType === "reminder") {
    message = `Just a friendly reminder that your appointment with ${req['payload'].username} is on: ${req.body.apptDate}, at ${req.body.apptTime}`;
  } else if (req.body.messageType === "cancellation") {
    message =  `This is a notification to let you know your appointment with ${req['payload'].username} on: ${req.body.apptDate}, at ${req.body.apptTime} has been cancelled`;
  }
  
  //send message to twilio
  client.sendSms({
    to: req.body.client_num,
    from: twilioNumber,
    body: message
  }, function(error, message){
     if (!error) {
       console.log('Success! The SID for this message is: ');
       console.log(message.sid);
       console.log(`Message sent on: `);
       console.log(message.dateCreated);
       return res.send({message: `Message was successfully sent on: ${message.dateCreated}.`});
     } else {
       console.log(error);
       return res.send(error);
     }
  });
});

export default router;

