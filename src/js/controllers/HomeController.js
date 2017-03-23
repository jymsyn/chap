var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController() {
                console.log('wtf');
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        angular.module('app').controller('HomeController', HomeController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZUNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJIb21lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0FXWjtBQVhELFdBQVUsR0FBRztJQUFDLElBQUEsV0FBVyxDQVd4QjtJQVhhLFdBQUEsV0FBVztRQUN2QjtZQUVFO2dCQUdFLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDcEIsQ0FBQztZQUNILHFCQUFDO1FBQUQsQ0FBQyxBQVBELElBT0M7UUFQWSwwQkFBYyxpQkFPMUIsQ0FBQTtRQUVELE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ3JFLENBQUMsRUFYYSxXQUFXLEdBQVgsZUFBVyxLQUFYLGVBQVcsUUFXeEI7QUFBRCxDQUFDLEVBWFMsR0FBRyxLQUFILEdBQUcsUUFXWiJ9