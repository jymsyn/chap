'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var jwt = require("express-jwt");
var GetIGPic = require('get-instagram-photo');
var auth = jwt({
    userProperty: 'payload',
    secret: process.env.JWT_SECRET
});
var router = express.Router();
router.post('/', function (req, res, next) {
    console.log(req.body);
    GetIGPic(req.body.url).then(function (image) {
        if (image !== undefined || image !== null || image !== "") {
            console.log("Successfully retrieved image: " + image);
            var igurlobj = {};
            igurlobj.image = image;
            res.send(igurlobj);
        }
        else {
            console.log("cannot save image because you are trying to save a private image. Please make your profile public");
        }
    }).catch(function (err) {
        console.error(err);
        res.status(500).send('cannot save image because instagram profile is private.');
    });
});
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0SUdQaG90b0FQSS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdldElHUGhvdG9BUEkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLGlDQUFvQztBQUNwQyxpQ0FBb0M7QUFDcEMsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDaEQsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDO0lBQ2IsWUFBWSxFQUFFLFNBQVM7SUFDdkIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVTtDQUMvQixDQUFDLENBQUM7QUFFSCxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7SUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsS0FBSztRQUMvQixFQUFFLENBQUEsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDekQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBaUMsS0FBTyxDQUFDLENBQUE7WUFDckQsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLFFBQVEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxtR0FBbUcsQ0FBQyxDQUFBO1FBQ2xILENBQUM7SUFDSCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFHO1FBQ1gsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyx5REFBeUQsQ0FBQyxDQUFBO0lBQ2pGLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUE7QUFFRixrQkFBZSxNQUFNLENBQUMifQ==