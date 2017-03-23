'use strict';
var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var HairstyleController = (function () {
            function HairstyleController(HairstyleService, UserService, $window, $state) {
                this.HairstyleService = HairstyleService;
                this.UserService = UserService;
                this.$window = $window;
                this.$state = $state;
                this.hairstyle = {};
                this.editedStyle = {};
                this.styles = [];
                this.editing = false;
                this.styles = HairstyleService.getUserHairstyles();
                console.log(this.styles);
            }
            HairstyleController.prototype.addHairstyle = function () {
                var _this = this;
                console.log("hitting");
                this.HairstyleService.saveHairstyle(this.hairstyle).then(function (res) {
                    _this.hairstyle = null;
                    console.log(res.name);
                    _this.styles.push(res);
                });
            };
            ;
            HairstyleController.prototype.delete = function (hairstyle) {
                var _this = this;
                this.HairstyleService.deleteHairstyle(hairstyle._id).then(function (res) {
                    _this.styles.splice(_this.styles.indexOf(hairstyle), 1);
                    console.log(res.message);
                });
            };
            ;
            HairstyleController.prototype.showEdit = function () {
                this.editing === !this.editing;
                console.log(this.editing);
            };
            return HairstyleController;
        }());
        Controllers.HairstyleController = HairstyleController;
        angular.module('app').controller('HairstyleController', HairstyleController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGFpcnN0eWxlQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkhhaXJzdHlsZUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFBO0FBQ1osSUFBVSxHQUFHLENBNENaO0FBNUNELFdBQVUsR0FBRztJQUFDLElBQUEsV0FBVyxDQTRDeEI7SUE1Q2EsV0FBQSxXQUFXO1FBQ3ZCO1lBZ0NFLDZCQUNVLGdCQUErQyxFQUMvQyxXQUFxQyxFQUNyQyxPQUEwQixFQUMxQixNQUEyQjtnQkFIM0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUErQjtnQkFDL0MsZ0JBQVcsR0FBWCxXQUFXLENBQTBCO2dCQUNyQyxZQUFPLEdBQVAsT0FBTyxDQUFtQjtnQkFDMUIsV0FBTSxHQUFOLE1BQU0sQ0FBcUI7Z0JBbkM5QixjQUFTLEdBQUMsRUFBRSxDQUFDO2dCQUNiLGdCQUFXLEdBQUMsRUFBRSxDQUFDO2dCQUNmLFdBQU0sR0FBQyxFQUFFLENBQUM7Z0JBQ1YsWUFBTyxHQUFHLEtBQUssQ0FBQztnQkFrQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztnQkFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDMUIsQ0FBQztZQWxDTSwwQ0FBWSxHQUFuQjtnQkFBQSxpQkFTQztnQkFSQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFBO2dCQUN0QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFHO29CQUMzRCxLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztvQkFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7b0JBQ3JCLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUd4QixDQUFDLENBQUMsQ0FBQTtZQUNKLENBQUM7WUFBQSxDQUFDO1lBRUssb0NBQU0sR0FBYixVQUFjLFNBQVM7Z0JBQXZCLGlCQUtDO2dCQUpDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUc7b0JBQzVELEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO29CQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDM0IsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDO1lBQUEsQ0FBQztZQUVLLHNDQUFRLEdBQWY7Z0JBQ0UsSUFBSSxDQUFDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQzNCLENBQUM7WUFjSCwwQkFBQztRQUFELENBQUMsQUF6Q0QsSUF5Q0M7UUF6Q1ksK0JBQW1CLHNCQXlDL0IsQ0FBQTtRQUNELE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLHFCQUFxQixFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDL0UsQ0FBQyxFQTVDYSxXQUFXLEdBQVgsZUFBVyxLQUFYLGVBQVcsUUE0Q3hCO0FBQUQsQ0FBQyxFQTVDUyxHQUFHLEtBQUgsR0FBRyxRQTRDWiJ9