'use strict';
var moment;
var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var AppointmentController = (function () {
            function AppointmentController(AppointmentService, UserService, $location) {
                var _this = this;
                this.AppointmentService = AppointmentService;
                this.UserService = UserService;
                this.$location = $location;
                this.appointments = [];
                this.user = {
                    isTakingWalkins: Boolean
                };
                this.apptArr = [];
                AppointmentService.getAllBarberAppointments().then(function (res) {
                    _this.appointments = res;
                });
                UserService.getUser(UserService.status.username).then(function (res) {
                    _this.user = res.data;
                    console.log(_this.user);
                });
                this.isMobile = window.innerWidth <= 990;
                var newDate = new Date().toDateString();
                var todayStr = newDate.split(' ').splice(0, 4);
                this.today = todayStr.join(' ');
                this.showNav = true;
            }
            AppointmentController.prototype.resetDate = function () {
                this.date = '';
            };
            AppointmentController.prototype.showModal = function (appt) {
                console.log("This is the selected appointment id: " + appt.appointmentDate);
                this.modalAppt = appt;
                document.getElementById('hiddenBtn').click();
            };
            AppointmentController.prototype.sendReminder = function () {
                this.AppointmentService.sendMessage({
                    messageType: 'reminder',
                    apptDate: this.modalAppt.appointmentDate,
                    apptTime: this.modalAppt.appointmentTime,
                    client_num: this.modalAppt.phone
                }).then(function (res) {
                    alert(res.message);
                });
            };
            AppointmentController.prototype.sendCancel = function () {
                var _this = this;
                this.modalAppt.status = 'cancelled';
                this.AppointmentService.setStatus(this.modalAppt).then(function (res) {
                    _this.AppointmentService.sendMessage({
                        messageType: 'cancellation',
                        apptDate: _this.modalAppt.appointmentDate,
                        apptTime: _this.modalAppt.appointmentTime,
                        client_num: _this.modalAppt.phone
                    }).then(function (res) {
                        alert(res.message);
                    });
                });
            };
            AppointmentController.prototype.toggleWalkin = function () {
                var user = this.user;
                console.log(user.isTakingWalkins);
                user.isTakingWalkins = !this.user.isTakingWalkins;
                console.log(user);
                this.UserService.setWalkin(user).then(function (res) {
                    console.log(res);
                });
            };
            return AppointmentController;
        }());
        Controllers.AppointmentController = AppointmentController;
        angular.module('app').controller('AppointmentController', AppointmentController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwb2ludG1lbnRzQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFwcG9pbnRtZW50c0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFBO0FBQ1osSUFBSSxNQUFNLENBQUE7QUFDVixJQUFVLEdBQUcsQ0FnRlo7QUFoRkQsV0FBVSxHQUFHO0lBQUMsSUFBQSxXQUFXLENBZ0Z4QjtJQWhGYSxXQUFBLFdBQVc7UUFDdkI7WUEyREUsK0JBQ1Usa0JBQW1ELEVBQ25ELFdBQXFDLEVBQ3JDLFNBQThCO2dCQUh4QyxpQkFpQkM7Z0JBaEJTLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBaUM7Z0JBQ25ELGdCQUFXLEdBQVgsV0FBVyxDQUEwQjtnQkFDckMsY0FBUyxHQUFULFNBQVMsQ0FBcUI7Z0JBNURqQyxpQkFBWSxHQUFDLEVBQUUsQ0FBQztnQkFNaEIsU0FBSSxHQUFDO29CQUNWLGVBQWUsRUFBRSxPQUFPO2lCQUN6QixDQUFDO2dCQUNLLFlBQU8sR0FBQyxFQUFFLENBQUM7Z0JBcURoQixrQkFBa0IsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUc7b0JBQ3JELEtBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO2dCQUMxQixDQUFDLENBQUMsQ0FBQztnQkFDSCxXQUFXLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRztvQkFDeEQsS0FBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO29CQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDeEIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsVUFBVSxJQUFJLEdBQUcsQ0FBQTtnQkFDeEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxJQUFJ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