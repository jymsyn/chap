'use strict';
var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var ProfileController = (function () {
            function ProfileController(AppointmentService, UserService, $stateParams, $location, $scope) {
                var _this = this;
                this.AppointmentService = AppointmentService;
                this.UserService = UserService;
                this.$stateParams = $stateParams;
                this.$location = $location;
                this.$scope = $scope;
                this.loading = false;
                this.appointment = {
                    barber: String,
                    appointmentDay: String,
                    appointmentDate: String,
                    date: String,
                    time: String
                };
                UserService.getUser($stateParams['username']).then(function (res) {
                    _this.profile = res.data;
                    _this.appointment.barber = _this.profile._id;
                    _this.$scope.position = [_this.profile.location.lat, _this.profile.location.lng];
                    console.log(_this.$scope.position);
                });
                var today = new Date();
                this.maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 5);
                this.googleMapsUrl = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCLJoF1zdrJ7OmtYYw37yDyN7JHJpC-moI';
            }
            ProfileController.prototype.submitAppt = function () {
                var _this = this;
                this.loading = true;
                var appointment = this.AppointmentService.convertDate(this.appointment);
                appointment.status = 'active';
                var appt = appointment;
                this.AppointmentService.saveAppt(appt).then(function (res) {
                    console.log(res);
                    _this.$location.path('/reservationcomplete');
                });
            };
            ;
            ;
            return ProfileController;
        }());
        Controllers.ProfileController = ProfileController;
        angular.module('app').controller('ProfileController', ProfileController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZmlsZUNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQcm9maWxlQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixJQUFVLEdBQUcsQ0ErQ1o7QUEvQ0QsV0FBVSxHQUFHO0lBQUMsSUFBQSxXQUFXLENBK0N4QjtJQS9DYSxXQUFBLFdBQVc7UUFDdkI7WUEyQkUsMkJBQ1Usa0JBQW1ELEVBQ25ELFdBQXFDLEVBQ3JDLFlBQXVDLEVBQ3ZDLFNBQThCLEVBQzlCLE1BQU07Z0JBTGhCLGlCQWdCQztnQkFmUyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQWlDO2dCQUNuRCxnQkFBVyxHQUFYLFdBQVcsQ0FBMEI7Z0JBQ3JDLGlCQUFZLEdBQVosWUFBWSxDQUEyQjtnQkFDdkMsY0FBUyxHQUFULFNBQVMsQ0FBcUI7Z0JBQzlCLFdBQU0sR0FBTixNQUFNLENBQUE7Z0JBMUJULFlBQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ2hCLGdCQUFXLEdBQUM7b0JBQ2pCLE1BQU0sRUFBRSxNQUFNO29CQUNkLGNBQWMsRUFBRSxNQUFNO29CQUN0QixlQUFlLEVBQUUsTUFBTTtvQkFDdkIsSUFBSSxFQUFFLE1BQU07b0JBQ1osSUFBSSxFQUFFLE1BQU07aUJBQ2IsQ0FBQztnQkFxQkEsV0FBVyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFHO29CQUNyRCxLQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7b0JBQ3hCLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFBO29CQUMxQyxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtvQkFDN0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO2dCQUNuQyxDQUFDLENBQUMsQ0FBQztnQkFDSCxJQUFJLEtBQUssR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO2dCQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNwRixJQUFJLENBQUMsYUFBYSxHQUFHLHFGQUFxRixDQUFDO1lBQzdHLENBQUM7WUE1Qk0sc0NBQVUsR0FBakI7Z0JBQUEsaUJBU0M7Z0JBUkMsSUFBSSxDQUFDLE9BQU8sR0FBRSxJQUFJLENBQUM7Z0JBQ25CLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN4RSxXQUFXLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztnQkFDOUIsSUFBSSxJQUFJLEdBQUcsV0FBVyxDQUFDO2dCQUN2QixJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUc7b0JBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2pCLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7Z0JBQzlDLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQUFBLENBQUM7WUFtQkQsQ0FBQztZQUNKLHdCQUFDO1FBQUQsQ0FBQyxBQTVDRCxJQTRDQztRQTVDWSw2QkFBaUIsb0JBNEM3QixDQUFBO1FBQ0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUMzRSxDQUFDLEVBL0NhLFdBQVcsR0FBWCxlQUFXLEtBQVgsZUFBVyxRQStDeEI7QUFBRCxDQUFDLEVBL0NTLEdBQUcsS0FBSCxHQUFHLFFBK0NaIn0=