var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var EditHairstyleController = (function () {
            function EditHairstyleController(HairstyleService, $state, $stateParams) {
                this.HairstyleService = HairstyleService;
                this.$state = $state;
                this.$stateParams = $stateParams;
                this.hairstyle = HairstyleService.getHairstyle($stateParams['id']);
                console.log($stateParams['id']);
            }
            EditHairstyleController.prototype.update = function () {
                var _this = this;
                this.HairstyleService.updateHairstyle(this.hairstyle).then(function (res) {
                    _this.$state.go("ManageHairstyles", {}, { reload: true });
                });
            };
            ;
            return EditHairstyleController;
        }());
        Controllers.EditHairstyleController = EditHairstyleController;
        angular.module('app').controller('EditHairstyleController', EditHairstyleController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWRpdEhhaXJzdHlsZUNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJFZGl0SGFpcnN0eWxlQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0FzQlo7QUF0QkQsV0FBVSxHQUFHO0lBQUMsSUFBQSxXQUFXLENBc0J4QjtJQXRCYSxXQUFBLFdBQVc7UUFDdkI7WUFVRSxpQ0FDVSxnQkFBK0MsRUFDL0MsTUFBTSxFQUNOLFlBQXVDO2dCQUZ2QyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQStCO2dCQUMvQyxXQUFNLEdBQU4sTUFBTSxDQUFBO2dCQUNOLGlCQUFZLEdBQVosWUFBWSxDQUEyQjtnQkFFL0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ25FLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7WUFDakMsQ0FBQztZQWRNLHdDQUFNLEdBQWI7Z0JBQUEsaUJBSUM7Z0JBSEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRztvQkFDN0QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7Z0JBQ3pELENBQUMsQ0FBQyxDQUFBO1lBQ0osQ0FBQztZQUFBLENBQUM7WUFXSiw4QkFBQztRQUFELENBQUMsQUFsQkQsSUFrQkM7UUFsQlksbUNBQXVCLDBCQWtCbkMsQ0FBQTtRQUVELE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLHlCQUF5QixFQUFFLHVCQUF1QixDQUFDLENBQUM7SUFDdkYsQ0FBQyxFQXRCYSxXQUFXLEdBQVgsZUFBVyxLQUFYLGVBQVcsUUFzQnhCO0FBQUQsQ0FBQyxFQXRCUyxHQUFHLEtBQUgsR0FBRyxRQXNCWiJ9