var app;
(function (app) {
    var Services;
    (function (Services) {
        var UserService = (function () {
            function UserService(IGConverterService, $resource, $window, $http, $q) {
                this.IGConverterService = IGConverterService;
                this.$resource = $resource;
                this.$window = $window;
                this.$http = $http;
                this.$q = $q;
                this.status = {
                    _id: Number,
                    username: String,
                    email: String
                };
                this.UserResource = $resource('api/v1/users');
                this.UserRegisterResource = $resource('api/v1/users/register');
                this.UserLoginResource = $resource('api/v1/users/login');
                if (this.getToken())
                    this.setUser();
            }
            UserService.prototype.register = function (user) {
                console.log(user);
                return this.UserRegisterResource.save(user).$promise;
            };
            ;
            UserService.prototype.login = function (user) {
                return this.UserLoginResource.save(user).$promise;
            };
            UserService.prototype.setUser = function () {
                var u = JSON.parse(atob(this.$window.localStorage.getItem('token').split('.')[1]));
                this.status._id = u._id;
                this.status.username = u.username;
                this.status.email = u.email;
                this.status.isTakingWalkins = u.isTakingWalkins;
            };
            UserService.prototype.removeToken = function () {
                this.$window.localStorage.removeItem('token');
            };
            UserService.prototype.removeUser = function () {
                this.status._id = null;
                this.status.username = null;
                this.status.email = null;
                this.status.isTakingWalkins = null;
            };
            ;
            UserService.prototype.getToken = function () {
                return this.$window.localStorage.getItem('token');
            };
            UserService.prototype.getUserHairstyles = function () {
                return this.UserResource.query().$promise;
            };
            UserService.prototype.getUser = function (username) {
                var q = this.$q.defer();
                this.$http.get('/api/v1/users/' + username).then(function (res) {
                    q.resolve(res);
                }, function (err) {
                    q.reject(err);
                });
                return q.promise;
            };
            ;
            UserService.prototype.updateUserInfo = function (user) {
                var q = this.$q.defer();
                this.$http.put('/api/v1/users', user).then(function (res) {
                    q.resolve(res.data);
                }, function (err) {
                    console.error("Error trying to update user information", err);
                    q.reject(err);
                });
                return q.promise;
            };
            UserService.prototype.setWalkin = function (walkinStatus) {
                var q = this.$q.defer();
                this.$http.put('/api/v1/users/status', walkinStatus).then(function (res) {
                    q.resolve(res.data);
                }, function (err) {
                    q.reject(err);
                });
                return q.promise;
            };
            return UserService;
        }());
        Services.UserService = UserService;
        angular.module('app').service('UserService', UserService);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJVc2VyU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0E4Rlo7QUE5RkQsV0FBVSxHQUFHO0lBQUMsSUFBQSxRQUFRLENBOEZyQjtJQTlGYSxXQUFBLFFBQVE7UUFDcEI7WUErRUUscUJBQ1Usa0JBQW1ELEVBQ25ELFNBQXVDLEVBQ3ZDLE9BQTBCLEVBQzFCLEtBQXNCLEVBQ3RCLEVBQWdCO2dCQUpoQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQWlDO2dCQUNuRCxjQUFTLEdBQVQsU0FBUyxDQUE4QjtnQkFDdkMsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7Z0JBQzFCLFVBQUssR0FBTCxLQUFLLENBQWlCO2dCQUN0QixPQUFFLEdBQUYsRUFBRSxDQUFjO2dCQW5GbkIsV0FBTSxHQUFHO29CQUNkLEdBQUcsRUFBRSxNQUFNO29CQUNYLFFBQVEsRUFBRSxNQUFNO29CQUNoQixLQUFLLEVBQUUsTUFBTTtpQkFDZCxDQUFDO2dCQWlGQSxJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDOUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO2dCQUMvRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDLG9CQUFvQixDQUFDLENBQUM7Z0JBQ3pELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDckMsQ0FBQztZQS9FTSw4QkFBUSxHQUFmLFVBQWdCLElBQUk7Z0JBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUN2RCxDQUFDO1lB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