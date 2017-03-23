'use strict';
var app;
(function (app) {
    var Controller;
    (function (Controller) {
        var NavbarController = (function () {
            function NavbarController(UserService, $state, $location, $window, $animate) {
                this.UserService = UserService;
                this.$state = $state;
                this.$location = $location;
                this.$window = $window;
                this.$animate = $animate;
                if (this.UserService.getToken()) {
                    this.status = UserService.status;
                    console.log("navbar should show: " + this.status.username);
                }
            }
            NavbarController.prototype.logout = function () {
                this.showNav = false;
                console.log("showNav=" + this.showNav);
                this.UserService.removeToken();
                this.UserService.removeUser();
                this.$state.go("Home", {}, { reload: true });
                this.$animate.enabled(false);
            };
            ;
            ;
            return NavbarController;
        }());
        Controller.NavbarController = NavbarController;
        angular.module('app').controller('NavbarController', NavbarController);
    })(Controller = app.Controller || (app.Controller = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmF2YmFyQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk5hdmJhckNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2IsSUFBVSxHQUFHLENBOEJaO0FBOUJELFdBQVUsR0FBRztJQUFDLElBQUEsVUFBVSxDQThCdkI7SUE5QmEsV0FBQSxVQUFVO1FBQ3RCO1lBZUUsMEJBQ1UsV0FBcUMsRUFDckMsTUFBMkIsRUFDM0IsU0FBOEIsRUFDOUIsT0FBTyxFQUNQLFFBQVE7Z0JBSlIsZ0JBQVcsR0FBWCxXQUFXLENBQTBCO2dCQUNyQyxXQUFNLEdBQU4sTUFBTSxDQUFxQjtnQkFDM0IsY0FBUyxHQUFULFNBQVMsQ0FBcUI7Z0JBQzlCLFlBQU8sR0FBUCxPQUFPLENBQUE7Z0JBQ1AsYUFBUSxHQUFSLFFBQVEsQ0FBQTtnQkFFaEIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBLENBQUM7b0JBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztvQkFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBdUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFVLENBQUMsQ0FBQTtnQkFDNUQsQ0FBQztZQUNILENBQUM7WUFyQk0saUNBQU0sR0FBYjtnQkFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFXLElBQUksQ0FBQyxPQUFTLENBQUMsQ0FBQTtnQkFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUUvQixDQUFDO1lBQUEsQ0FBQztZQWFELENBQUM7WUFDSix1QkFBQztRQUFELENBQUMsQUEzQkQsSUEyQkM7UUEzQlksMkJBQWdCLG1CQTJCNUIsQ0FBQTtRQUNELE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLGtCQUFrQixFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDekUsQ0FBQyxFQTlCYSxVQUFVLEdBQVYsY0FBVSxLQUFWLGNBQVUsUUE4QnZCO0FBQUQsQ0FBQyxFQTlCUyxHQUFHLEtBQUgsR0FBRyxRQThCWiJ9