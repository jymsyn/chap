"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var jwt = require("express-jwt");
var client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
var auth = jwt({
    userProperty: 'payload',
    secret: process.env.JWT_SECRET
});
var router = express.Router();
var twilioNumber = process.env.TWILIO_NUM;
router.post('/', auth, function (req, res, next) {
    var message;
    if (req.body.messageType === "reminder") {
        message = "Just a friendly reminder that your appointment with " + req['payload'].username + " is on: " + req.body.apptDate + ", at " + req.body.apptTime;
    }
    else if (req.body.messageType === "cancellation") {
        message = "This is a notification to let you know your appointment with " + req['payload'].username + " on: " + req.body.apptDate + ", at " + req.body.apptTime + " has been cancelled";
    }
    client.sendSms({
        to: req.body.client_num,
        from: twilioNumber,
        body: message
    }, function (error, message) {
        if (!error) {
            console.log('Success! The SID for this message is: ');
            console.log(message.sid);
            console.log("Message sent on: ");
            console.log(message.dateCreated);
            return res.send({ message: "Message was successfully sent on: " + message.dateCreated + "." });
        }
        else {
            console.log(error);
            return res.send(error);
        }
    });
});
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHdpbGlvQXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHdpbGlvQXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQW9DO0FBQ3BDLGlDQUFvQztBQUNwQyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDOUYsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDO0lBQ2IsWUFBWSxFQUFFLFNBQVM7SUFDdkIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVTtDQUMvQixDQUFDLENBQUM7QUFFSCxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFOUIsSUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7QUFFNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO0lBQ3BDLElBQUksT0FBTyxDQUFDO0lBR1osRUFBRSxDQUFBLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQztRQUN2QyxPQUFPLEdBQUcseURBQXVELEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLGdCQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxhQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBVSxDQUFDO0lBQ2xKLENBQUM7SUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEtBQUssY0FBYyxDQUFDLENBQUMsQ0FBQztRQUNuRCxPQUFPLEdBQUksa0VBQWdFLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLGFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLGFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLHdCQUFxQixDQUFDO0lBQzVLLENBQUM7SUFHRCxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ2IsRUFBRSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVTtRQUN2QixJQUFJLEVBQUUsWUFBWTtRQUNsQixJQUFJLEVBQUUsT0FBTztLQUNkLEVBQUUsVUFBUyxLQUFLLEVBQUUsT0FBTztRQUN2QixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7WUFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2pDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTyxFQUFFLHVDQUFxQyxPQUFPLENBQUMsV0FBVyxNQUFHLEVBQUMsQ0FBQyxDQUFDO1FBQzFGLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUM7QUFFSCxrQkFBZSxNQUFNLENBQUMifQ==