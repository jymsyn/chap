"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var AppointmentSchema = new mongoose.Schema({
    customerFirstname: { type: String },
    customerLastname: { type: String },
    hairstyle: { type: mongoose.Schema.Types.ObjectId, ref: 'Hairstyle' },
    phone: { type: Number },
    appointmentDate: { type: String },
    appointmentTime: { type: String },
    barber: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    message: { type: String },
    date: { type: String },
    status: {
        enum: ['cancelled', 'active', 'complete'],
        type: String
    }
});
exports.Appointment = mongoose.model('Appointment', AppointmentSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwb2ludG1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHBvaW50bWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBQ2IsbUNBQXNDO0FBRXRDLElBQUksaUJBQWlCLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQzFDLGlCQUFpQixFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtJQUNuQyxnQkFBZ0IsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7SUFDbEMsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFDO0lBQ3BFLEtBQUssRUFBRSxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUM7SUFDckIsZUFBZSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtJQUNqQyxlQUFlLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFDO0lBQ2hDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBQztJQUM1RCxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO0lBQ3pCLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7SUFDdEIsTUFBTSxFQUFFO1FBQ04sSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUM7UUFDekMsSUFBSSxFQUFFLE1BQU07S0FFYjtDQUNGLENBQUMsQ0FBQztBQUVRLFFBQUEsV0FBVyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLENBQUMifQ==