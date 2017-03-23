'use strict';
var app;
(function (app) {
    var Services;
    (function (Services) {
        var AppointmentService = (function () {
            function AppointmentService($resource, $http, $q) {
                this.$resource = $resource;
                this.$http = $http;
                this.$q = $q;
                this.AppointmentResource = $resource('/api/v1/appointments/:id', null, { 'update': { method: 'PUT' } });
                this.twilioAPIResource = $resource('/api/v1/twilio');
            }
            AppointmentService.prototype.saveAppt = function (appt) {
                return this.AppointmentResource.save(appt).$promise;
            };
            AppointmentService.prototype.getAllBarberAppointments = function () {
                return this.AppointmentResource.query().$promise;
            };
            AppointmentService.prototype.sendMessage = function (message) {
                return this.twilioAPIResource.save(message).$promise;
            };
            AppointmentService.prototype.setStatus = function (status) {
                var q = this.$q.defer();
                this.$http.put('/api/v1/appointments', status).then(function (res) {
                    q.resolve(res.data);
                }, function (err) {
                    q.reject(err);
                });
                return this.AppointmentResource.update(status).$promise;
            };
            AppointmentService.prototype.convertDate = function (appointment) {
                var convertedDate = appointment.appointmentDate.split(' ').splice(0, 4);
                appointment.appointmentDate = convertedDate.join(' ');
                var aDate = new Date(appointment.appointmentDate);
                appointment.date = moment(aDate).format("YYYY-M-D");
                var aTime = appointment.appointmentTime.split(' ')[0];
                var hour = aTime.split(':')[0];
                var minute = aTime.split(':')[1];
                if (hour > 12) {
                    if (hour - 12 > 0) {
                        aTime = hour - 12 + ":" + minute + " pm";
                    }
                }
                else if (hour == 12) {
                    aTime = hour + ":" + minute + " pm";
                }
                else {
                    aTime = hour + ":" + minute + " am";
                }
                appointment.appointmentTime = aTime;
                console.log(appointment);
                return appointment;
            };
            ;
            return AppointmentService;
        }());
        Services.AppointmentService = AppointmentService;
        angular.module('app').service('AppointmentService', AppointmentService);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwb2ludG1lbnRTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQXBwb2ludG1lbnRTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQVUsR0FBRyxDQThEWjtBQTlERCxXQUFVLEdBQUc7SUFBQyxJQUFBLFFBQVEsQ0E4RHJCO0lBOURhLFdBQUEsUUFBUTtRQUNwQjtZQW1ERSw0QkFDVSxTQUF1QyxFQUN2QyxLQUFzQixFQUN0QixFQUFnQjtnQkFGaEIsY0FBUyxHQUFULFNBQVMsQ0FBOEI7Z0JBQ3ZDLFVBQUssR0FBTCxLQUFLLENBQWlCO2dCQUN0QixPQUFFLEdBQUYsRUFBRSxDQUFjO2dCQUV4QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsU0FBUyxDQUFDLDBCQUEwQixFQUFFLElBQUksRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsRUFBQyxDQUFDLENBQUM7Z0JBQ3RHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUN2RCxDQUFDO1lBckRNLHFDQUFRLEdBQWYsVUFBZ0IsSUFBSTtnQkFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ3RELENBQUM7WUFFTSxxREFBd0IsR0FBL0I7Z0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDbkQsQ0FBQztZQUVNLHdDQUFXLEdBQWxCLFVBQW1CLE9BQU87Z0JBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUN2RCxDQUFDO1lBRU0sc0NBQVMsR0FBaEIsVUFBaUIsTUFBTTtnQkFDckIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFD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