var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var EditUserController = (function () {
            function EditUserController(IGConverterService, UserService, $window, $state) {
                var _this = this;
                this.IGConverterService = IGConverterService;
                this.UserService = UserService;
                this.$window = $window;
                this.$state = $state;
                UserService.getUser(UserService.status.username).then(function (res) {
                    if (res.data.igurl) {
                        _this.alreadyUploaded = true;
                        console.log("Ig url has already been uploaded: " + _this.alreadyUploaded);
                    }
                    _this.user = res.data;
                    console.log(_this.user);
                });
            }
            EditUserController.prototype.updateProfile = function () {
                var _this = this;
                this.user.address = this.user.streetAddress + " " + this.user.city + ", " + this.user.state;
                this.geocoder(function () {
                    _this.IGConverterService.getIgUrl(_this.user.igurl).then(function (res) {
                        _this.user.igurl = res.image;
                        console.log(_this.user);
                        _this.UserService.updateUserInfo(_this.user).then(function (res) {
                            console.log(res);
                            _this.alreadyUploaded = true;
                            alert("Update successful");
                        });
                    });
                });
            };
            ;
            EditUserController.prototype.geocoder = function (cb) {
                var _this = this;
                var geo = new google.maps.Geocoder();
                geo.geocode({ "address": this.user.address }, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK && results.length > 0) {
                        _this.user.location = results[0].geometry.location;
                        cb();
                    }
                    else {
                        console.log("Could not find address, make sure you are using a valide address.");
                    }
                });
            };
            return EditUserController;
        }());
        Controllers.EditUserController = EditUserController;
        angular.module('app').controller('EditUserController', EditUserController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWRpdFVzZXJDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRWRpdFVzZXJDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsR0FBRyxDQW1EWjtBQW5ERCxXQUFVLEdBQUc7SUFBQyxJQUFBLFdBQVcsQ0FtRHhCO0lBbkRhLFdBQUEsV0FBVztRQUN2QjtZQWlDRSw0QkFDVSxrQkFBbUQsRUFDbkQsV0FBcUMsRUFDckMsT0FBTyxFQUNQLE1BQU07Z0JBSmhCLGlCQWNDO2dCQWJTLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBaUM7Z0JBQ25ELGdCQUFXLEdBQVgsV0FBVyxDQUEwQjtnQkFDckMsWUFBTyxHQUFQLE9BQU8sQ0FBQTtnQkFDUCxXQUFNLEdBQU4sTUFBTSxDQUFBO2dCQUVkLFdBQVcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFHO29CQUN4RCxFQUFFLENBQUEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQ2xCLEtBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO3dCQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLHVDQUFxQyxLQUFJLENBQUMsZUFBaUIsQ0FBQyxDQUFBO29CQUMxRSxDQUFDO29CQUNELEtBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztvQkFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pCLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQTFDTSwwQ0FBYSxHQUFwQjtnQkFBQSxpQkFjQztnQkFiQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBTSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsU0FBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksVUFBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQU8sQ0FBQztnQkFFdkYsSUFBSSxDQUFDLFFBQVEsQ0FBQztvQkFDWixLQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRzt3QkFDekQsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQzt3QkFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7d0JBQ3RCLEtBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFHOzRCQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBOzRCQUNoQixLQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQzs0QkFDNUIsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUE7d0JBQzVCLENBQUMsQ0FBQyxDQUFBO29CQUNKLENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQUFBLENBQUM7WUFFTSxxQ0FBUSxHQUFoQixVQUFpQixFQUFFO2dCQUFuQixpQkFVQztnQkFUQyxJQUFJLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3JDLEdBQUcsQ0FBQyxPQUFPLENBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxVQUFDLE9BQU8sRUFBRSxNQUFNO29CQUM3RCxFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDbEUsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7d0JBQ2xELEVBQUUsRUFBRSxDQUFDO29CQUNQLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxtRUFBbUUsQ0FBQyxDQUFBO29CQUNsRixDQUFDO2dCQUNILENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQWlCSCx5QkFBQztRQUFELENBQUMsQUFoREQsSUFnREM7UUFoRFksOEJBQWtCLHFCQWdEOUIsQ0FBQTtRQUNELE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLG9CQUFvQixFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDN0UsQ0FBQyxFQW5EYSxXQUFXLEdBQVgsZUFBVyxLQUFYLGVBQVcsUUFtRHhCO0FBQUQsQ0FBQyxFQW5EUyxHQUFHLEtBQUgsR0FBRyxRQW1EWiJ9