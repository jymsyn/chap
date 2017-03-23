'use strict';
var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var BookAppointmentController = (function () {
            function BookAppointmentController(AppointmentService, UserService, $location) {
                this.AppointmentService = AppointmentService;
                this.UserService = UserService;
                this.$location = $location;
            }
            BookAppointmentController.prototype.submitAppt = function () {
                var _this = this;
                this.appointment.status = "Active";
                this.AppointmentService.saveAppt(this.appointment).then(function (res) {
                    _this.$location.path('/appointments');
                });
            };
            ;
            return BookAppointmentController;
        }());
        Controllers.BookAppointmentController = BookAppointmentController;
        angular.module('app').controller('BookAppointmentController', BookAppointmentController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9va0FwcG9pbnRtZW50Q29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkJvb2tBcHBvaW50bWVudENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFBO0FBQ1osSUFBVSxHQUFHLENBbUJaO0FBbkJELFdBQVUsR0FBRztJQUFDLElBQUEsV0FBVyxDQW1CeEI7SUFuQmEsV0FBQSxXQUFXO1FBQ3ZCO1lBVUUsbUNBQ1Usa0JBQW1ELEVBQ25ELFdBQXFDLEVBQ3JDLFNBQThCO2dCQUY5Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQWlDO2dCQUNuRCxnQkFBVyxHQUFYLFdBQVcsQ0FBMEI7Z0JBQ3JDLGNBQVMsR0FBVCxTQUFTLENBQXFCO1lBRXhDLENBQUM7WUFaTSw4Q0FBVSxHQUFqQjtnQkFBQSxpQkFLQztnQkFKQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUE7Z0JBQ2xDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUc7b0JBQzFELEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUN2QyxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUM7WUFBQSxDQUFDO1lBUUosZ0NBQUM7UUFBRCxDQUFDLEFBaEJELElBZ0JDO1FBaEJZLHFDQUF5Qiw0QkFnQnJDLENBQUE7UUFDRCxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQywyQkFBMkIsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO0lBQzNGLENBQUMsRUFuQmEsV0FBVyxHQUFYLGVBQVcsS0FBWCxlQUFXLFFBbUJ4QjtBQUFELENBQUMsRUFuQlMsR0FBRyxLQUFILEdBQUcsUUFtQloifQ==