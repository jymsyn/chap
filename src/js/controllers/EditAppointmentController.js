'use strict';
var moment;
var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var EditAppointmentController = (function () {
            function EditAppointmentController(AppointmentService, UserService, $location) {
                var _this = this;
                this.AppointmentService = AppointmentService;
                this.UserService = UserService;
                this.$location = $location;
                AppointmentService.getAllBarberAppointments().then(function (res) {
                    _this.appointments = res;
                });
                this.isMobile = window.innerWidth <= 990;
                console.log(this.isMobile);
                console.log(window.innerWidth);
            }
            EditAppointmentController.prototype.setDate = function () {
                var dateStringArr = this.date.split(' ').splice(0, 3);
                this.dateString = dateStringArr.join(' ');
                console.log("the date is " + this.date);
            };
            EditAppointmentController.prototype.resetDate = function () {
                this.date = '';
            };
            return EditAppointmentController;
        }());
        Controllers.EditAppointmentController = EditAppointmentController;
        angular.module('app').controller('EditAppointmentController', EditAppointmentController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWRpdEFwcG9pbnRtZW50Q29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkVkaXRBcHBvaW50bWVudENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFBO0FBQ1osSUFBSSxNQUFNLENBQUM7QUFDWCxJQUFVLEdBQUcsQ0E0Qlo7QUE1QkQsV0FBVSxHQUFHO0lBQUMsSUFBQSxXQUFXLENBNEJ4QjtJQTVCYSxXQUFBLFdBQVc7UUFDdkI7WUFhRSxtQ0FDVSxrQkFBbUQsRUFDbkQsV0FBcUMsRUFDckMsU0FBOEI7Z0JBSHhDLGlCQVdDO2dCQVZTLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBaUM7Z0JBQ25ELGdCQUFXLEdBQVgsV0FBVyxDQUEwQjtnQkFDckMsY0FBUyxHQUFULFNBQVMsQ0FBcUI7Z0JBRXRDLGtCQUFrQixDQUFDLHdCQUF3QixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRztvQkFDckQsS0FBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7Z0JBQzFCLENBQUMsQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFVBQVUsSUFBSSxHQUFHLENBQUE7Z0JBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO2dCQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUNoQyxDQUFDO1lBckJNLDJDQUFPLEdBQWQ7Z0JBQ0UsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFDckQsSUFBSSxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFlLElBQUksQ0FBQyxJQUFNLENBQUMsQ0FBQTtZQUN6QyxDQUFDO1lBRU0sNkNBQVMsR0FBaEI7Z0JBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7WUFDakIsQ0FBQztZQWNILGdDQUFDO1FBQUQsQ0FBQyxBQXpCRCxJQXlCQztRQXpCWSxxQ0FBeUIsNEJBeUJyQyxDQUFBO1FBQ0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsMkJBQTJCLEVBQUUseUJBQXlCLENBQUMsQ0FBQztJQUMzRixDQUFDLEVBNUJhLFdBQVcsR0FBWCxlQUFXLEtBQVgsZUFBVyxRQTRCeEI7QUFBRCxDQUFDLEVBNUJTLEdBQUcsS0FBSCxHQUFHLFFBNEJaIn0=