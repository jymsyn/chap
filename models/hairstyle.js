"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var GetIGPic = require('get-instagram-photo');
var HairstyleSchema = new mongoose.Schema({
    name: { type: String },
    price: { type: String },
    duration: { type: Number },
    description: { type: String },
    igimg: { type: String },
    img: { type: String },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, {
    timestamps: { createdAt: 'created_at' }
});
HairstyleSchema.method('getInstagramImage', function (url) {
    var _this = this;
    GetIGPic(url).then(function (image) {
        if (image !== undefined || image !== null || image !== "") {
            console.log("Successfully retrieved image: " + image);
            return _this.igimg = image;
        }
        else {
            console.log("cannot save image because you are trying to save a private image. Please make your profile public");
        }
    }).catch(function (err) {
        console.error("there is an error ho", err);
    });
});
exports.default = mongoose.model('Hairstyle', HairstyleSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFpcnN0eWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGFpcnN0eWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQXNDO0FBQ3RDLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBRWhELElBQUksZUFBZSxHQUFHLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUN4QyxJQUFJLEVBQUUsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDO0lBQ3BCLEtBQUssRUFBRSxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUM7SUFDckIsUUFBUSxFQUFFLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQztJQUN4QixXQUFXLEVBQUUsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDO0lBQzNCLEtBQUssRUFBRSxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUM7SUFDckIsR0FBRyxFQUFFLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQztJQUNuQixTQUFTLEVBQUUsRUFBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQztDQUMvRSxFQUFFO0lBQ0QsVUFBVSxFQUFFLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBQztDQUN0QyxDQUFDLENBQUM7QUFFSCxlQUFlLENBQUMsTUFBTSxDQUFDLG1CQUFtQixFQUFFLFVBQVMsR0FBRztJQUFaLGlCQVczQztJQVZDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxLQUFLO1FBQ3RCLEVBQUUsQ0FBQSxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN6RCxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFpQyxLQUFPLENBQUMsQ0FBQTtZQUNyRCxNQUFNLENBQUMsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxtR0FBbUcsQ0FBQyxDQUFBO1FBQ2xILENBQUM7SUFDSCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFHO1FBQ1gsT0FBTyxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM3QyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFBO0FBRUYsa0JBQWUsUUFBUSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDLENBQUMifQ==