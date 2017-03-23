var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var UserController = (function () {
            function UserController(UserService, $window, $state) {
                this.UserService = UserService;
                this.$window = $window;
                this.$state = $state;
                this.loading = false;
                this.other = false;
            }
            UserController.prototype.showOther = function () {
                this.other = true;
                console.log("hello");
            };
            UserController.prototype.register = function () {
                var _this = this;
                this.loading = true;
                if (this.userInfo.profession2) {
                    this.userInfo.profession = this.userInfo.profession2;
                }
                ;
                var user = this.userInfo;
                this.userInfo.isTakingWalkins = false;
                console.log(this.userInfo);
                this.UserService.register(this.userInfo).then(function (res) {
                    _this.$window.localStorage.setItem('token', res.token);
                    _this.UserService.setUser();
                    _this.$state.go("UserAccount", {}, { reload: true });
                }).catch(function (err) {
                    _this.loading = false;
                    console.log(err);
                });
            };
            ;
            UserController.prototype.login = function () {
                var _this = this;
                this.loading = true;
                this.UserService.login(this.userInfo).then(function (res) {
                    _this.$window.localStorage.setItem('token', res.token);
                    _this.UserService.setUser();
                    _this.$state.go("Appointments", {}, { reload: true });
                }).catch(function (err) {
                    _this.loading = false;
                    alert(err.data.data);
                });
            };
            ;
            return UserController;
        }());
        Controllers.UserController = UserController;
        angular.module('app').controller('UserController', UserController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJVc2VyQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0FrRFo7QUFsREQsV0FBVSxHQUFHO0lBQUMsSUFBQSxXQUFXLENBa0R4QjtJQWxEYSxXQUFBLFdBQVc7UUFDdkI7WUF5Q0Usd0JBQ1UsV0FBcUMsRUFDckMsT0FBTyxFQUNQLE1BQU07Z0JBRk4sZ0JBQVcsR0FBWCxXQUFXLENBQTBCO2dCQUNyQyxZQUFPLEdBQVAsT0FBTyxDQUFBO2dCQUNQLFdBQU0sR0FBTixNQUFNLENBQUE7Z0JBMUNULFlBQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ2hCLFVBQUssR0FBRyxLQUFLLENBQUM7WUEyQ3JCLENBQUM7WUF6Q00sa0NBQVMsR0FBaEI7Z0JBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDdEIsQ0FBQztZQUVNLGlDQUFRLEdBQWY7Z0JBQUEsaUJBaUJDO2dCQWhCQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQSxDQUFDO29CQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQztnQkFDdkQsQ0FBQztnQkFBQSxDQUFDO2dCQUVGLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUE7Z0JBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztnQkFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7Z0JBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFHO29CQUNoRCxLQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDdEQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDM0IsS0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLEVBQUUsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO2dCQUNwRCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFHO29CQUNYLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQixDQUFDLENBQUMsQ0FBQTtZQUNKLENBQUM7WUFBQSxDQUFDO1lBRUssOEJBQUssR0FBWjtnQkFBQSxpQkFVQztnQkFUQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUc7b0JBQzdDLEtBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN0RCxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUMzQixLQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsRUFBRSxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7Z0JBQ3JELENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQUc7b0JBQ1gsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7b0JBQ3BCLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUN0QixDQUFDLENBQUMsQ0FBQztZQUNMLENBQUM7WUFBQSxDQUFDO1lBUUoscUJBQUM7UUFBRCxDQUFDLEFBL0NELElBK0NDO1FBL0NZLDBCQUFjLGlCQStDMUIsQ0FBQTtRQUNELE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ3JFLENBQUMsRUFsRGEsV0FBVyxHQUFYLGVBQVcsS0FBWCxlQUFXLFFBa0R4QjtBQUFELENBQUMsRUFsRFMsR0FBRyxLQUFILEdBQUcsUUFrRFoifQ==