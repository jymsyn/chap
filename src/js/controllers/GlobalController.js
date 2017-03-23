var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var GlobalController = (function () {
            function GlobalController() {
                this.homepage = true;
            }
            return GlobalController;
        }());
        Controllers.GlobalController = GlobalController;
        angular.module('app').controller('GlobalController', GlobalController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2xvYmFsQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkdsb2JhbENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxHQUFHLENBVVo7QUFWRCxXQUFVLEdBQUc7SUFBQyxJQUFBLFdBQVcsQ0FVeEI7SUFWYSxXQUFBLFdBQVc7UUFDdkI7WUFHRTtnQkFGTyxhQUFRLEdBQUcsSUFBSSxDQUFDO1lBSXZCLENBQUM7WUFDSCx1QkFBQztRQUFELENBQUMsQUFORCxJQU1DO1FBTlksNEJBQWdCLG1CQU01QixDQUFBO1FBRUQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUN6RSxDQUFDLEVBVmEsV0FBVyxHQUFYLGVBQVcsS0FBWCxlQUFXLFFBVXhCO0FBQUQsQ0FBQyxFQVZTLEdBQUcsS0FBSCxHQUFHLFFBVVoifQ==