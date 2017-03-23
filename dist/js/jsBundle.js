'use strict';
var app;
(function(app) {
    angular.module('app', ['ui.router', 'ngResource', 'ngAnimate', 'ui.mask', 'ngMap'])
        .config(function($stateProvider, $locationProvider, $httpProvider, $urlRouterProvider) {
            $stateProvider.state('Home', {
                    url: '/',
                    templateUrl: '/templates/home.html',
                    controller: app.Controllers.HomeController,
                    controllerAs: 'vm'
                })
                .state('Login', {
                    url: '/login',
                    templateUrl: '/templates/login.html',
                    controller: app.Controllers.UserController,
                    controllerAs: 'vm'
                })
                .state('Register', {
                    url: '/register',
                    templateUrl: '/templates/register.html',
                    controller: app.Controllers.UserController,
                    controllerAs: 'vm'
                })
                .state('UserAccount', {
                    url: '/account',
                    templateUrl: '/templates/userAccountPage.html',
                    controller: app.Controllers.EditUserController,
                    controllerAs: 'vm'
                })
                .state('Appointments', {
                    url: '/appointments',
                    templateUrl: '/templates/appointments.html',
                    controller: app.Controllers.AppointmentController,
                    controllerAs: 'vm'
                })
                .state('ManageHairstyles', {
                    url: '/styles',
                    templateUrl: '/templates/ManageHairstyles.html',
                    controller: app.Controllers.HairstyleController,
                    controllerAs: 'vm'
                })
                .state('EditHairstyle', {
                    url: '/editstyle/:id',
                    templateUrl: '/templates/EditHairstyle.html',
                    controller: app.Controllers.EditHairstyleController,
                    controllerAs: 'vm'
                })
                .state('BookAppointment', {
                    url: '/appointment/:username',
                    templateUrl: '/templates/EditHairstyle.html',
                    controller: app.Controllers.BookAppointmentController,
                    controllerAs: 'vm'
                })
                .state('Profile', {
                    url: '/barber/:username',
                    templateUrl: '/templates/profilePage.html',
                    controller: app.Controllers.ProfileController,
                    controllerAs: 'vm'
                })
                .state('RSVPDone', {
                    url: '/reservationcomplete',
                    templateUrl: '/templates/RSVPDone.html',
                    controller: app.Controllers.HomeController,
                    controllerAs: 'vm'
                });
            $urlRouterProvider.otherwise('/');
            $locationProvider.html5Mode(true);
            $httpProvider.interceptors.push('HTTPFactory');
        })
        .run(function($rootScope, $animate) {
            $animate.enabled(false);
            $rootScope.pageanimate = false;
            $rootScope.toggleAnimate = function() {
                if ($rootScope.pageanimate === true) {
                    $rootScope.pageanimate = false;
                    $animate.enabled(false);
                    console.log($rootScope.pageanimate);
                } else {
                    $rootScope.pageanimate = true;
                    $animate.enabled(true);
                    console.log($rootScope.pageanimate);
                }
            };
        });
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQVUsR0FBRyxDQXlGWjtBQXpGRCxXQUFVLEdBQUc7SUFDWCxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNoRixNQUFNLENBQUMsVUFDUixjQUFvQyxFQUNwQyxpQkFBdUMsRUFDdkMsYUFBK0IsRUFDL0Isa0JBQTRDO1FBRTVDLGNBQWMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQzNCLEdBQUcsRUFBRSxHQUFHO1lBQ1IsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxVQUFVLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxjQUFjO1lBQzFDLFlBQVksRUFBRSxJQUFJO1NBQ25CLENBQUM7YUFDRCxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ2QsR0FBRyxFQUFFLFFBQVE7WUFDYixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFVBQVUsRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLGNBQWM7WUFDMUMsWUFBWSxFQUFFLElBQUk7U0FDbkIsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFVLEVBQUU7WUFDakIsR0FBRyxFQUFFLFdBQVc7WUFDaEIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxVQUFVLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxjQUFjO1lBQzFDLFlBQVksRUFBRSxJQUFJO1NBQ25CLENBQUM7YUFDRCxLQUFLLENBQUMsYUFBYSxFQUFFO1lBQ3BCLEdBQUcsRUFBRSxVQUFVO1lBQ2YsV0FBVyxFQUFFLGlDQUFpQztZQUM5QyxVQUFVLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxrQkFBa0I7WUFDOUMsWUFBWSxFQUFFLElBQUk7U0FDbkIsQ0FBQzthQUNELEtBQUssQ0FBQyxjQUFjLEVBQUU7WUFDckIsR0FBRyxFQUFFLGVBQWU7WUFDcEIsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxVQUFVLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxxQkFBcUI7WUFDakQsWUFBWSxFQUFFLElBQUk7U0FDbkIsQ0FBQzthQUNELEtBQUssQ0FBQyxrQkFBa0IsRUFBRTtZQUN6QixHQUFHLEVBQUUsU0FBUztZQUNkLFdBQVcsRUFBRSxrQ0FBa0M7WUFDL0MsVUFBVSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsbUJBQW1CO1lBQy9DLFlBQVksRUFBRSxJQUFJO1NBQ25CLENBQUM7YUFDRCxLQUFLLENBQUMsZUFBZSxFQUFFO1lBQ3RCLEdBQUcsRUFBRSxnQkFBZ0I7WUFDckIsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxVQUFVLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyx1QkFBdUI7WUFDbkQsWUFBWSxFQUFFLElBQUk7U0FDbkIsQ0FBQzthQUNELEtBQUssQ0FBQyxpQkFBaUIsRUFBRTtZQUN4QixHQUFHLEVBQUUsd0JBQXdCO1lBQzdCLFdBQVcsRUFBRSwrQkFBK0I7WUFDNUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMseUJBQXlCO1lBQ3JELFlBQVksRUFBRSxJQUFJO1NBQ25CLENBQUM7YUFDRCxLQUFLLENBQUMsU0FBUyxFQUFFO1lBQ2hCLEdBQUcsRUFBRSxtQkFBbUI7WUFDeEIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxVQUFVLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxpQkFBaUI7WUFDN0MsWUFBWSxFQUFFLElBQUk7U0FDbkIsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFVLEVBQUU7WUFDakIsR0FBRyxFQUFFLHNCQUFzQjtZQUMzQixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFVBQVUsRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLGNBQWM7WUFDMUMsWUFBWSxFQUFFLElBQUk7U0FDbkIsQ0FBQyxDQUFDO1FBRUgsa0JBQWtCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNqRCxDQUFDLENBQUM7U0FDRCxHQUFHLENBQUMsVUFBQyxVQUFVLEVBQUUsUUFBUTtRQUN0QixRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLFVBQVUsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBRS9CLFVBQVUsQ0FBQyxhQUFhLEdBQUc7WUFDekIsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxVQUFVLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztnQkFDL0IsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUE7WUFDckMsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLFVBQVUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUM5QixRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQTtZQUNyQyxDQUFDO1FBQ0gsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLEVBekZTLEdBQUcsS0FBSCxHQUFHLFFBeUZaIn0=
angular.module('app').directive('backImg', function() {
    return function(scope, element, attrs) {
        var url = attrs.backImg;
        element.css({
            'background-image': 'url(' + url + ')',
            'background-size': 'cover',
            'background': '#310736',
            'background': '-moz-linear-gradient(45deg, #310736 0%, #ff5c5c 100%)',
            'background': '-webkit-linear-gradient(45deg, #310736 0%,#ff5c5c 100%)',
            'background': 'linear-gradient(45deg, #310736 0%,#ff5c5c 100%)',
            'filter': "progid:DXImageTransform.Microsoft.gradient( startColorstr='#310736', endColorstr='#ff5c5c',GradientType=1 )"
        });
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFja2dyb3VuZEltYWdlRGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQmFja2dyb3VuZEltYWdlRGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRTtJQUN2QyxNQUFNLENBQUMsVUFBUyxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUs7UUFDakMsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDO1lBQ1Isa0JBQWtCLEVBQUUsTUFBTSxHQUFHLEdBQUcsR0FBRSxHQUFHO1lBQ3JDLGlCQUFpQixFQUFHLE9BQU87WUFDM0IsWUFBWSxFQUFFLFNBQVM7WUFDeEIsWUFBWSxFQUFFLHVEQUF1RDtZQUNyRSxZQUFZLEVBQUUseURBQXlEO1lBQ3ZFLFlBQVksRUFBRSxpREFBaUQ7WUFDL0QsUUFBUSxFQUFFLDZHQUE2RztTQUN6SCxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUM7QUFDTixDQUFDLENBQUMsQ0FBQyJ9
angular.module('app').directive('datePicker', function() {
    return ({
        restrict: 'A',
        link: function(scope, elem, attrs) {
            var today = new Date();
            var max_Date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 5);
            console.log(max_Date);
            console.log(today);
            $('#date').calendar({
                onChange: function(date) {
                    $('#leDate').val(date).trigger("change");
                },
                type: 'date',
                minDate: today,
                maxDate: max_Date,
                formatter: {
                    date: function(date, settings) {
                        if (!date)
                            return '';
                        var day = date.getDate();
                        var month = date.getMonth() + 1;
                        var year = date.getFullYear();
                        return day + '-' + month + '-' + year;
                    }
                }
            });
            $('#time').calendar({
                onChange: function(date) {
                    $('#leTime').val(date.toTimeString()).trigger("change");
                },
                type: 'time'
            });
            $('#calDatePicker').calendar({
                onChange: function(date) {
                    $('#pickedDayVal').val(date.toDateString()).trigger("change");
                },
                type: 'date'
            });
            $('#calDatePickerMobile').calendar({
                onChange: function(date) {
                    $('#pickedDayValMobile').val(date.toDateString()).trigger("change");
                },
                type: 'date'
            });
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZVBpY2tlckRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRhdGVQaWNrZXJEaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLGNBQU0sT0FBQSxDQUFDO0lBQ25ELFFBQVEsRUFBRSxHQUFHO0lBQ2IsSUFBSSxFQUFFLFVBQVUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLO1FBQ2hDLElBQUksS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRW5CLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDbEIsUUFBUSxFQUFFLFVBQVMsSUFBSTtnQkFDckIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDM0MsQ0FBQztZQUNELElBQUksRUFBRSxNQUFNO1lBQ1osT0FBTyxFQUFFLEtBQUs7WUFDZCxPQUFPLEVBQUUsUUFBUTtZQUNqQixTQUFTLEVBQUU7Z0JBQ1QsSUFBSSxFQUFFLFVBQVUsSUFBSSxFQUFFLFFBQVE7b0JBQzVCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO3dCQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7b0JBQ3JCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDekIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDaEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUM5QixNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQztnQkFDeEMsQ0FBQzthQUNGO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUNsQixRQUFRLEVBQUUsVUFBUyxJQUFJO2dCQUNyQixDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMxRCxDQUFDO1lBQ0QsSUFBSSxFQUFFLE1BQU07U0FDYixDQUFDLENBQUM7UUFFSCxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDM0IsUUFBUSxFQUFFLFVBQVMsSUFBSTtnQkFDckIsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDaEUsQ0FBQztZQUNELElBQUksRUFBRSxNQUFNO1NBQ2IsQ0FBQyxDQUFBO1FBRUYsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ2pDLFFBQVEsRUFBRSxVQUFTLElBQUk7Z0JBQ3JCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEUsQ0FBQztZQUNELElBQUksRUFBRSxNQUFNO1NBQ2IsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsRUEvQ2tELENBK0NsRCxDQUFDLENBQUMifQ==
angular.module('app').directive('dropdown', function() {
    return ({
        restrict: 'A',
        link: function(scope, elem, attrs) {
            $('.ui.dropdown').dropdown();
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJvcERvd25EaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJEcm9wRG93bkRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsY0FBTSxPQUFBLENBQUM7SUFDakQsUUFBUSxFQUFFLEdBQUc7SUFDYixJQUFJLEVBQUUsVUFBVSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUs7UUFDaEMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQy9CLENBQUM7Q0FDRixDQUFDLEVBTGdELENBS2hELENBQUMsQ0FBQyJ9
angular.module('app').directive('footer', function() {
    return ({
        templateUrl: '../../templates/footer.html',
        restrict: 'E'
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9vdGVyRGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRm9vdGVyRGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNBLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxjQUFNLE9BQUEsQ0FBQztJQUMvQyxXQUFXLEVBQUUsNkJBQTZCO0lBQzFDLFFBQVEsRUFBRSxHQUFHO0NBQ2QsQ0FBQyxFQUg4QyxDQUc5QyxDQUFDLENBQUMifQ==
angular.module('app').directive('apptModal', function() {
    return ({
        restrict: 'A',
        link: function(scope, elem, attrs) {
            $('#hiddenBtn').click(function() {
                $('.ui.modal').modal('show');
            });
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWxEaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNb2RhbERpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsY0FBTSxPQUFBLENBQUM7SUFDbEQsUUFBUSxFQUFFLEdBQUc7SUFDYixJQUFJLEVBQUUsVUFBVSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUs7UUFDaEMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNwQixDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsRUFQaUQsQ0FPakQsQ0FBQyxDQUFDIn0=
angular.module('app').directive('navbar', function() {
    return ({
        templateUrl: '../../templates/navbar.html',
        restrict: 'E',
        controller: 'NavbarController',
        controllerAs: 'nc'
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmF2YmFyRGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTmF2YmFyRGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxjQUFNLE9BQUEsQ0FBQztJQUMvQyxXQUFXLEVBQUUsNkJBQTZCO0lBQzFDLFFBQVEsRUFBRSxHQUFHO0lBQ2IsVUFBVSxFQUFFLGtCQUFrQjtJQUM5QixZQUFZLEVBQUUsSUFBSTtDQUNuQixDQUFDLEVBTDhDLENBSzlDLENBQUMsQ0FBQyJ9
angular.module('app').directive('tabMenu', function() {
    return ({
        restrict: 'A',
        link: function(scope, elem, attrs) {
            $(".menu>[data-tab=first]").tab();
            $(".menu>[data-tab=second]").tab();
            $(".menu>[data-tab=third]").tab();
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFiTWVudURpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRhYk1lbnVEaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLGNBQU0sT0FBQSxDQUFDO0lBQ2hELFFBQVEsRUFBRSxHQUFHO0lBQ2IsSUFBSSxFQUFFLFVBQVUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLO1FBQ2hDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2xDLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFBO1FBQ2xDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFBO0lBQ25DLENBQUM7Q0FDRixDQUFDLEVBUCtDLENBTy9DLENBQUMsQ0FBQyJ9
var app;
(function(app) {
    var Components;
    (function(Components) {
        var HaircutComponent = (function() {
            function HaircutComponent() {}
            return HaircutComponent;
        }());
        Components.HaircutComponent = HaircutComponent;
        angular.module('app').component('haircutList', HaircutComponent);
    })(Components = app.Components || (app.Components = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGFpcmN1dHNDb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJIYWlyY3V0c0NvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0FLWjtBQUxELFdBQVUsR0FBRztJQUFDLElBQUEsVUFBVSxDQUt2QjtJQUxhLFdBQUEsVUFBVTtRQUNwQjtZQUFBO1lBRUEsQ0FBQztZQUFELHVCQUFDO1FBQUQsQ0FBQyxBQUZELElBRUM7UUFGWSwyQkFBZ0IsbUJBRTVCLENBQUE7UUFDRCxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQTtJQUNwRSxDQUFDLEVBTGEsVUFBVSxHQUFWLGNBQVUsS0FBVixjQUFVLFFBS3ZCO0FBQUQsQ0FBQyxFQUxTLEdBQUcsS0FBSCxHQUFHLFFBS1oifQ==
'use strict';
var moment;
var app;
(function(app) {
    var Controllers;
    (function(Controllers) {
        var AppointmentController = (function() {
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
                AppointmentService.getAllBarberAppointments().then(function(res) {
                    _this.appointments = res;
                });
                UserService.getUser(UserService.status.username).then(function(res) {
                    _this.user = res.data;
                    console.log(_this.user);
                });
                this.isMobile = window.innerWidth <= 990;
                var newDate = new Date().toDateString();
                var todayStr = newDate.split(' ').splice(0, 4);
                this.today = todayStr.join(' ');
                this.showNav = true;
            }
            AppointmentController.prototype.resetDate = function() {
                this.date = '';
            };
            AppointmentController.prototype.showModal = function(appt) {
                console.log("This is the selected appointment id: " + appt.appointmentDate);
                this.modalAppt = appt;
                document.getElementById('hiddenBtn').click();
            };
            AppointmentController.prototype.sendReminder = function() {
                this.AppointmentService.sendMessage({
                    messageType: 'reminder',
                    apptDate: this.modalAppt.appointmentDate,
                    apptTime: this.modalAppt.appointmentTime,
                    client_num: this.modalAppt.phone
                }).then(function(res) {
                    alert(res.message);
                });
            };
            AppointmentController.prototype.sendCancel = function() {
                var _this = this;
                this.modalAppt.status = 'cancelled';
                this.AppointmentService.setStatus(this.modalAppt).then(function(res) {
                    _this.AppointmentService.sendMessage({
                        messageType: 'cancellation',
                        apptDate: _this.modalAppt.appointmentDate,
                        apptTime: _this.modalAppt.appointmentTime,
                        client_num: _this.modalAppt.phone
                    }).then(function(res) {
                        alert(res.message);
                    });
                });
            };
            AppointmentController.prototype.toggleWalkin = function() {
                var user = this.user;
                console.log(user.isTakingWalkins);
                user.isTakingWalkins = !this.user.isTakingWalkins;
                console.log(user);
                this.UserService.setWalkin(user).then(function(res) {
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
'use strict';
var app;
(function(app) {
    var Controllers;
    (function(Controllers) {
        var BookAppointmentController = (function() {
            function BookAppointmentController(AppointmentService, UserService, $location) {
                this.AppointmentService = AppointmentService;
                this.UserService = UserService;
                this.$location = $location;
            }
            BookAppointmentController.prototype.submitAppt = function() {
                var _this = this;
                this.appointment.status = "Active";
                this.AppointmentService.saveAppt(this.appointment).then(function(res) {
                    _this.$location.path('/appointments');
                });
            };;
            return BookAppointmentController;
        }());
        Controllers.BookAppointmentController = BookAppointmentController;
        angular.module('app').controller('BookAppointmentController', BookAppointmentController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9va0FwcG9pbnRtZW50Q29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkJvb2tBcHBvaW50bWVudENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFBO0FBQ1osSUFBVSxHQUFHLENBbUJaO0FBbkJELFdBQVUsR0FBRztJQUFDLElBQUEsV0FBVyxDQW1CeEI7SUFuQmEsV0FBQSxXQUFXO1FBQ3ZCO1lBVUUsbUNBQ1Usa0JBQW1ELEVBQ25ELFdBQXFDLEVBQ3JDLFNBQThCO2dCQUY5Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQWlDO2dCQUNuRCxnQkFBVyxHQUFYLFdBQVcsQ0FBMEI7Z0JBQ3JDLGNBQVMsR0FBVCxTQUFTLENBQXFCO1lBRXhDLENBQUM7WUFaTSw4Q0FBVSxHQUFqQjtnQkFBQSxpQkFLQztnQkFKQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUE7Z0JBQ2xDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUc7b0JBQzFELEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUN2QyxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUM7WUFBQSxDQUFDO1lBUUosZ0NBQUM7UUFBRCxDQUFDLEFBaEJELElBZ0JDO1FBaEJZLHFDQUF5Qiw0QkFnQnJDLENBQUE7UUFDRCxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQywyQkFBMkIsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO0lBQzNGLENBQUMsRUFuQmEsV0FBVyxHQUFYLGVBQVcsS0FBWCxlQUFXLFFBbUJ4QjtBQUFELENBQUMsRUFuQlMsR0FBRyxLQUFILEdBQUcsUUFtQloifQ==
'use strict';
var moment;
var app;
(function(app) {
    var Controllers;
    (function(Controllers) {
        var EditAppointmentController = (function() {
            function EditAppointmentController(AppointmentService, UserService, $location) {
                var _this = this;
                this.AppointmentService = AppointmentService;
                this.UserService = UserService;
                this.$location = $location;
                AppointmentService.getAllBarberAppointments().then(function(res) {
                    _this.appointments = res;
                });
                this.isMobile = window.innerWidth <= 990;
                console.log(this.isMobile);
                console.log(window.innerWidth);
            }
            EditAppointmentController.prototype.setDate = function() {
                var dateStringArr = this.date.split(' ').splice(0, 3);
                this.dateString = dateStringArr.join(' ');
                console.log("the date is " + this.date);
            };
            EditAppointmentController.prototype.resetDate = function() {
                this.date = '';
            };
            return EditAppointmentController;
        }());
        Controllers.EditAppointmentController = EditAppointmentController;
        angular.module('app').controller('EditAppointmentController', EditAppointmentController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWRpdEFwcG9pbnRtZW50Q29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkVkaXRBcHBvaW50bWVudENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFBO0FBQ1osSUFBSSxNQUFNLENBQUM7QUFDWCxJQUFVLEdBQUcsQ0E0Qlo7QUE1QkQsV0FBVSxHQUFHO0lBQUMsSUFBQSxXQUFXLENBNEJ4QjtJQTVCYSxXQUFBLFdBQVc7UUFDdkI7WUFhRSxtQ0FDVSxrQkFBbUQsRUFDbkQsV0FBcUMsRUFDckMsU0FBOEI7Z0JBSHhDLGlCQVdDO2dCQVZTLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBaUM7Z0JBQ25ELGdCQUFXLEdBQVgsV0FBVyxDQUEwQjtnQkFDckMsY0FBUyxHQUFULFNBQVMsQ0FBcUI7Z0JBRXRDLGtCQUFrQixDQUFDLHdCQUF3QixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRztvQkFDckQsS0FBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7Z0JBQzFCLENBQUMsQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFVBQVUsSUFBSSxHQUFHLENBQUE7Z0JBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO2dCQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUNoQyxDQUFDO1lBckJNLDJDQUFPLEdBQWQ7Z0JBQ0UsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFDckQsSUFBSSxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFlLElBQUksQ0FBQyxJQUFNLENBQUMsQ0FBQTtZQUN6QyxDQUFDO1lBRU0sNkNBQVMsR0FBaEI7Z0JBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7WUFDakIsQ0FBQztZQWNILGdDQUFDO1FBQUQsQ0FBQyxBQXpCRCxJQXlCQztRQXpCWSxxQ0FBeUIsNEJBeUJyQyxDQUFBO1FBQ0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsMkJBQTJCLEVBQUUseUJBQXlCLENBQUMsQ0FBQztJQUMzRixDQUFDLEVBNUJhLFdBQVcsR0FBWCxlQUFXLEtBQVgsZUFBVyxRQTRCeEI7QUFBRCxDQUFDLEVBNUJTLEdBQUcsS0FBSCxHQUFHLFFBNEJaIn0=
var app;
(function(app) {
    var Controllers;
    (function(Controllers) {
        var EditHairstyleController = (function() {
            function EditHairstyleController(HairstyleService, $state, $stateParams) {
                this.HairstyleService = HairstyleService;
                this.$state = $state;
                this.$stateParams = $stateParams;
                this.hairstyle = HairstyleService.getHairstyle($stateParams['id']);
                console.log($stateParams['id']);
            }
            EditHairstyleController.prototype.update = function() {
                var _this = this;
                this.HairstyleService.updateHairstyle(this.hairstyle).then(function(res) {
                    _this.$state.go("ManageHairstyles", {}, {
                        reload: true
                    });
                });
            };;
            return EditHairstyleController;
        }());
        Controllers.EditHairstyleController = EditHairstyleController;
        angular.module('app').controller('EditHairstyleController', EditHairstyleController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWRpdEhhaXJzdHlsZUNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJFZGl0SGFpcnN0eWxlQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0FzQlo7QUF0QkQsV0FBVSxHQUFHO0lBQUMsSUFBQSxXQUFXLENBc0J4QjtJQXRCYSxXQUFBLFdBQVc7UUFDdkI7WUFVRSxpQ0FDVSxnQkFBK0MsRUFDL0MsTUFBTSxFQUNOLFlBQXVDO2dCQUZ2QyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQStCO2dCQUMvQyxXQUFNLEdBQU4sTUFBTSxDQUFBO2dCQUNOLGlCQUFZLEdBQVosWUFBWSxDQUEyQjtnQkFFL0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ25FLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7WUFDakMsQ0FBQztZQWRNLHdDQUFNLEdBQWI7Z0JBQUEsaUJBSUM7Z0JBSEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRztvQkFDN0QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7Z0JBQ3pELENBQUMsQ0FBQyxDQUFBO1lBQ0osQ0FBQztZQUFBLENBQUM7WUFXSiw4QkFBQztRQUFELENBQUMsQUFsQkQsSUFrQkM7UUFsQlksbUNBQXVCLDBCQWtCbkMsQ0FBQTtRQUVELE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLHlCQUF5QixFQUFFLHVCQUF1QixDQUFDLENBQUM7SUFDdkYsQ0FBQyxFQXRCYSxXQUFXLEdBQVgsZUFBVyxLQUFYLGVBQVcsUUFzQnhCO0FBQUQsQ0FBQyxFQXRCUyxHQUFHLEtBQUgsR0FBRyxRQXNCWiJ9
var app;
(function(app) {
    var Controllers;
    (function(Controllers) {
        var EditUserController = (function() {
            function EditUserController(IGConverterService, UserService, $window, $state) {
                var _this = this;
                this.IGConverterService = IGConverterService;
                this.UserService = UserService;
                this.$window = $window;
                this.$state = $state;
                UserService.getUser(UserService.status.username).then(function(res) {
                    if (res.data.igurl) {
                        _this.alreadyUploaded = true;
                        console.log("Ig url has already been uploaded: " + _this.alreadyUploaded);
                    }
                    _this.user = res.data;
                    console.log(_this.user);
                });
            }
            EditUserController.prototype.updateProfile = function() {
                var _this = this;
                this.user.address = this.user.streetAddress + " " + this.user.city + ", " + this.user.state;
                this.geocoder(function() {
                    _this.IGConverterService.getIgUrl(_this.user.igurl).then(function(res) {
                        _this.user.igurl = res.image;
                        console.log(_this.user);
                        _this.UserService.updateUserInfo(_this.user).then(function(res) {
                            console.log(res);
                            _this.alreadyUploaded = true;
                            alert("Update successful");
                        });
                    });
                });
            };;
            EditUserController.prototype.geocoder = function(cb) {
                var _this = this;
                var geo = new google.maps.Geocoder();
                geo.geocode({
                    "address": this.user.address
                }, function(results, status) {
                    if (status == google.maps.GeocoderStatus.OK && results.length > 0) {
                        _this.user.location = results[0].geometry.location;
                        cb();
                    } else {
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
var app;
(function(app) {
    var Controllers;
    (function(Controllers) {
        var GlobalController = (function() {
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
'use strict';
var app;
(function(app) {
    var Controllers;
    (function(Controllers) {
        var HairstyleController = (function() {
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
            HairstyleController.prototype.addHairstyle = function() {
                var _this = this;
                console.log("hitting");
                this.HairstyleService.saveHairstyle(this.hairstyle).then(function(res) {
                    _this.hairstyle = null;
                    console.log(res.name);
                    _this.styles.push(res);
                });
            };;
            HairstyleController.prototype.delete = function(hairstyle) {
                var _this = this;
                this.HairstyleService.deleteHairstyle(hairstyle._id).then(function(res) {
                    _this.styles.splice(_this.styles.indexOf(hairstyle), 1);
                    console.log(res.message);
                });
            };;
            HairstyleController.prototype.showEdit = function() {
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
var app;
(function(app) {
    var Controllers;
    (function(Controllers) {
        var HomeController = (function() {
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
'use strict';
var app;
(function(app) {
    var Controller;
    (function(Controller) {
        var NavbarController = (function() {
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
            NavbarController.prototype.logout = function() {
                this.showNav = false;
                console.log("showNav=" + this.showNav);
                this.UserService.removeToken();
                this.UserService.removeUser();
                this.$state.go("Home", {}, {
                    reload: true
                });
                this.$animate.enabled(false);
            };;;
            return NavbarController;
        }());
        Controller.NavbarController = NavbarController;
        angular.module('app').controller('NavbarController', NavbarController);
    })(Controller = app.Controller || (app.Controller = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmF2YmFyQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk5hdmJhckNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2IsSUFBVSxHQUFHLENBOEJaO0FBOUJELFdBQVUsR0FBRztJQUFDLElBQUEsVUFBVSxDQThCdkI7SUE5QmEsV0FBQSxVQUFVO1FBQ3RCO1lBZUUsMEJBQ1UsV0FBcUMsRUFDckMsTUFBMkIsRUFDM0IsU0FBOEIsRUFDOUIsT0FBTyxFQUNQLFFBQVE7Z0JBSlIsZ0JBQVcsR0FBWCxXQUFXLENBQTBCO2dCQUNyQyxXQUFNLEdBQU4sTUFBTSxDQUFxQjtnQkFDM0IsY0FBUyxHQUFULFNBQVMsQ0FBcUI7Z0JBQzlCLFlBQU8sR0FBUCxPQUFPLENBQUE7Z0JBQ1AsYUFBUSxHQUFSLFFBQVEsQ0FBQTtnQkFFaEIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBLENBQUM7b0JBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztvQkFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBdUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFVLENBQUMsQ0FBQTtnQkFDNUQsQ0FBQztZQUNILENBQUM7WUFyQk0saUNBQU0sR0FBYjtnQkFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFXLElBQUksQ0FBQyxPQUFTLENBQUMsQ0FBQTtnQkFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUUvQixDQUFDO1lBQUEsQ0FBQztZQWFELENBQUM7WUFDSix1QkFBQztRQUFELENBQUMsQUEzQkQsSUEyQkM7UUEzQlksMkJBQWdCLG1CQTJCNUIsQ0FBQTtRQUNELE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLGtCQUFrQixFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDekUsQ0FBQyxFQTlCYSxVQUFVLEdBQVYsY0FBVSxLQUFWLGNBQVUsUUE4QnZCO0FBQUQsQ0FBQyxFQTlCUyxHQUFHLEtBQUgsR0FBRyxRQThCWiJ9
'use strict';
var app;
(function(app) {
    var Controllers;
    (function(Controllers) {
        var ProfileController = (function() {
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
                UserService.getUser($stateParams['username']).then(function(res) {
                    _this.profile = res.data;
                    _this.appointment.barber = _this.profile._id;
                    _this.$scope.position = [_this.profile.location.lat, _this.profile.location.lng];
                    console.log(_this.$scope.position);
                });
                var today = new Date();
                this.maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 5);
                this.googleMapsUrl = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCLJoF1zdrJ7OmtYYw37yDyN7JHJpC-moI';
            }
            ProfileController.prototype.submitAppt = function() {
                var _this = this;
                this.loading = true;
                var appointment = this.AppointmentService.convertDate(this.appointment);
                appointment.status = 'active';
                var appt = appointment;
                this.AppointmentService.saveAppt(appt).then(function(res) {
                    console.log(res);
                    _this.$location.path('/reservationcomplete');
                });
            };;;
            return ProfileController;
        }());
        Controllers.ProfileController = ProfileController;
        angular.module('app').controller('ProfileController', ProfileController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZmlsZUNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQcm9maWxlQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixJQUFVLEdBQUcsQ0ErQ1o7QUEvQ0QsV0FBVSxHQUFHO0lBQUMsSUFBQSxXQUFXLENBK0N4QjtJQS9DYSxXQUFBLFdBQVc7UUFDdkI7WUEyQkUsMkJBQ1Usa0JBQW1ELEVBQ25ELFdBQXFDLEVBQ3JDLFlBQXVDLEVBQ3ZDLFNBQThCLEVBQzlCLE1BQU07Z0JBTGhCLGlCQWdCQztnQkFmUyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQWlDO2dCQUNuRCxnQkFBVyxHQUFYLFdBQVcsQ0FBMEI7Z0JBQ3JDLGlCQUFZLEdBQVosWUFBWSxDQUEyQjtnQkFDdkMsY0FBUyxHQUFULFNBQVMsQ0FBcUI7Z0JBQzlCLFdBQU0sR0FBTixNQUFNLENBQUE7Z0JBMUJULFlBQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ2hCLGdCQUFXLEdBQUM7b0JBQ2pCLE1BQU0sRUFBRSxNQUFNO29CQUNkLGNBQWMsRUFBRSxNQUFNO29CQUN0QixlQUFlLEVBQUUsTUFBTTtvQkFDdkIsSUFBSSxFQUFFLE1BQU07b0JBQ1osSUFBSSxFQUFFLE1BQU07aUJBQ2IsQ0FBQztnQkFxQkEsV0FBVyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFHO29CQUNyRCxLQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7b0JBQ3hCLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFBO29CQUMxQyxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtvQkFDN0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO2dCQUNuQyxDQUFDLENBQUMsQ0FBQztnQkFDSCxJQUFJLEtBQUssR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO2dCQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNwRixJQUFJLENBQUMsYUFBYSxHQUFHLHFGQUFxRixDQUFDO1lBQzdHLENBQUM7WUE1Qk0sc0NBQVUsR0FBakI7Z0JBQUEsaUJBU0M7Z0JBUkMsSUFBSSxDQUFDLE9BQU8sR0FBRSxJQUFJLENBQUM7Z0JBQ25CLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN4RSxXQUFXLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztnQkFDOUIsSUFBSSxJQUFJLEdBQUcsV0FBVyxDQUFDO2dCQUN2QixJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUc7b0JBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2pCLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7Z0JBQzlDLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQUFBLENBQUM7WUFtQkQsQ0FBQztZQUNKLHdCQUFDO1FBQUQsQ0FBQyxBQTVDRCxJQTRDQztRQTVDWSw2QkFBaUIsb0JBNEM3QixDQUFBO1FBQ0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUMzRSxDQUFDLEVBL0NhLFdBQVcsR0FBWCxlQUFXLEtBQVgsZUFBVyxRQStDeEI7QUFBRCxDQUFDLEVBL0NTLEdBQUcsS0FBSCxHQUFHLFFBK0NaIn0=
var app;
(function(app) {
    var Controllers;
    (function(Controllers) {
        var UserController = (function() {
            function UserController(UserService, $window, $state) {
                this.UserService = UserService;
                this.$window = $window;
                this.$state = $state;
                this.loading = false;
                this.other = false;
            }
            UserController.prototype.showOther = function() {
                this.other = true;
                console.log("hello");
            };
            UserController.prototype.register = function() {
                var _this = this;
                this.loading = true;
                if (this.userInfo.profession2) {
                    this.userInfo.profession = this.userInfo.profession2;
                };
                var user = this.userInfo;
                this.userInfo.isTakingWalkins = false;
                console.log(this.userInfo);
                this.UserService.register(this.userInfo).then(function(res) {
                    _this.$window.localStorage.setItem('token', res.token);
                    _this.UserService.setUser();
                    _this.$state.go("UserAccount", {}, {
                        reload: true
                    });
                }).catch(function(err) {
                    _this.loading = false;
                    console.log(err);
                });
            };;
            UserController.prototype.login = function() {
                var _this = this;
                this.loading = true;
                this.UserService.login(this.userInfo).then(function(res) {
                    _this.$window.localStorage.setItem('token', res.token);
                    _this.UserService.setUser();
                    _this.$state.go("Appointments", {}, {
                        reload: true
                    });
                }).catch(function(err) {
                    _this.loading = false;
                    alert(err.data.data);
                });
            };;
            return UserController;
        }());
        Controllers.UserController = UserController;
        angular.module('app').controller('UserController', UserController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJVc2VyQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0FrRFo7QUFsREQsV0FBVSxHQUFHO0lBQUMsSUFBQSxXQUFXLENBa0R4QjtJQWxEYSxXQUFBLFdBQVc7UUFDdkI7WUF5Q0Usd0JBQ1UsV0FBcUMsRUFDckMsT0FBTyxFQUNQLE1BQU07Z0JBRk4sZ0JBQVcsR0FBWCxXQUFXLENBQTBCO2dCQUNyQyxZQUFPLEdBQVAsT0FBTyxDQUFBO2dCQUNQLFdBQU0sR0FBTixNQUFNLENBQUE7Z0JBMUNULFlBQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ2hCLFVBQUssR0FBRyxLQUFLLENBQUM7WUEyQ3JCLENBQUM7WUF6Q00sa0NBQVMsR0FBaEI7Z0JBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDdEIsQ0FBQztZQUVNLGlDQUFRLEdBQWY7Z0JBQUEsaUJBaUJDO2dCQWhCQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQSxDQUFDO29CQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQztnQkFDdkQsQ0FBQztnQkFBQSxDQUFDO2dCQUVGLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUE7Z0JBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztnQkFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7Z0JBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFHO29CQUNoRCxLQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDdEQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDM0IsS0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLEVBQUUsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO2dCQUNwRCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFHO29CQUNYLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQixDQUFDLENBQUMsQ0FBQTtZQUNKLENBQUM7WUFBQSxDQUFDO1lBRUssOEJBQUssR0FBWjtnQkFBQSxpQkFVQztnQkFUQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUc7b0JBQzdDLEtBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN0RCxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUMzQixLQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsRUFBRSxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7Z0JBQ3JELENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQUc7b0JBQ1gsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7b0JBQ3BCLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUN0QixDQUFDLENBQUMsQ0FBQztZQUNMLENBQUM7WUFBQSxDQUFDO1lBUUoscUJBQUM7UUFBRCxDQUFDLEFBL0NELElBK0NDO1FBL0NZLDBCQUFjLGlCQStDMUIsQ0FBQTtRQUNELE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ3JFLENBQUMsRUFsRGEsV0FBVyxHQUFYLGVBQVcsS0FBWCxlQUFXLFFBa0R4QjtBQUFELENBQUMsRUFsRFMsR0FBRyxLQUFILEdBQUcsUUFrRFoifQ==
angular.module('app').filter('showActiveAppointments', function() {
    return function(items) {
        var arrayToReturn = [];
        for (var i = 0; i < items.length; i++) {
            var date = items[i].date;
            if (date > new Date()) {
                arrayToReturn.push(items[i]);
            }
        }
        return arrayToReturn;
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hvd0FjdGl2ZUFwcG9pbnRtZW50c0ZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlNob3dBY3RpdmVBcHBvaW50bWVudHNGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsd0JBQXdCLEVBQUU7SUFDbkQsTUFBTSxDQUFDLFVBQVMsS0FBSztRQUNuQixJQUFJLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDdkIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7WUFDL0IsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN6QixFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFFLENBQUM7Z0JBQ3JCLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakMsQ0FBQztRQUNMLENBQUM7UUFDRCxNQUFNLENBQUMsYUFBYSxDQUFDO0lBQ3hCLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=
'use strict';
var app;
(function(app) {
    var Services;
    (function(Services) {
        var AppointmentService = (function() {
            function AppointmentService($resource, $http, $q) {
                this.$resource = $resource;
                this.$http = $http;
                this.$q = $q;
                this.AppointmentResource = $resource('/api/v1/appointments/:id', null, {
                    'update': {
                        method: 'PUT'
                    }
                });
                this.twilioAPIResource = $resource('/api/v1/twilio');
            }
            AppointmentService.prototype.saveAppt = function(appt) {
                return this.AppointmentResource.save(appt).$promise;
            };
            AppointmentService.prototype.getAllBarberAppointments = function() {
                return this.AppointmentResource.query().$promise;
            };
            AppointmentService.prototype.sendMessage = function(message) {
                return this.twilioAPIResource.save(message).$promise;
            };
            AppointmentService.prototype.setStatus = function(status) {
                var q = this.$q.defer();
                this.$http.put('/api/v1/appointments', status).then(function(res) {
                    q.resolve(res.data);
                }, function(err) {
                    q.reject(err);
                });
                return this.AppointmentResource.update(status).$promise;
            };
            AppointmentService.prototype.convertDate = function(appointment) {
                var convertedDate = appointment.appointmentDate.split(' ').splice(0, 4);
                appointment.appointmentDate = convertedDate.join(' ');
                var aDate = new Date(appointment.appointmentDate);
                appointment.date = moment(aDate).format("YYYY-M-D");
                var aTime = appointment.appointmentTime.split(' ')[0];
                var hour = aTime.split(':')[0];
                var minute = aTime.split(':')[1];
                if (hour > 12) {
                    if (hour - 12 > 0) {
                        aTime = hour - 12 + ":" + minute + " pm";
                    }
                } else if (hour == 12) {
                    aTime = hour + ":" + minute + " pm";
                } else {
                    aTime = hour + ":" + minute + " am";
                }
                appointment.appointmentTime = aTime;
                console.log(appointment);
                return appointment;
            };;
            return AppointmentService;
        }());
        Services.AppointmentService = AppointmentService;
        angular.module('app').service('AppointmentService', AppointmentService);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwb2ludG1lbnRTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQXBwb2ludG1lbnRTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQVUsR0FBRyxDQThEWjtBQTlERCxXQUFVLEdBQUc7SUFBQyxJQUFBLFFBQVEsQ0E4RHJCO0lBOURhLFdBQUEsUUFBUTtRQUNwQjtZQW1ERSw0QkFDVSxTQUF1QyxFQUN2QyxLQUFzQixFQUN0QixFQUFnQjtnQkFGaEIsY0FBUyxHQUFULFNBQVMsQ0FBOEI7Z0JBQ3ZDLFVBQUssR0FBTCxLQUFLLENBQWlCO2dCQUN0QixPQUFFLEdBQUYsRUFBRSxDQUFjO2dCQUV4QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsU0FBUyxDQUFDLDBCQUEwQixFQUFFLElBQUksRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsRUFBQyxDQUFDLENBQUM7Z0JBQ3RHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUN2RCxDQUFDO1lBckRNLHFDQUFRLEdBQWYsVUFBZ0IsSUFBSTtnQkFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ3RELENBQUM7WUFFTSxxREFBd0IsR0FBL0I7Z0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDbkQsQ0FBQztZQUVNLHdDQUFXLEdBQWxCLFVBQW1CLE9BQU87Z0JBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUN2RCxDQUFDO1lBRU0sc0NBQVMsR0FBaEIsVUFBaUIsTUFBTTtnQkFDckIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFD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
'use strict';
var app;
(function(app) {
    var Services;
    (function(Services) {
        angular.module('app').factory('HTTPFactory', function($window) {
            return {
                request: function(config) {
                    config.headers = config.headers || {};
                    config.headers['Accepts'] = 'application/json';
                    config.headers['Content-Type'] = 'application/json';
                    if ($window.localStorage.getItem('token')) {
                        config.headers['Authorization'] = "Bearer " + $window.localStorage.getItem('token');
                    };
                    return config;
                }
            };
        });
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSFRUUEZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJIVFRQRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixJQUFVLEdBQUcsQ0FlWjtBQWZELFdBQVUsR0FBRztJQUFDLElBQUEsUUFBUSxDQWVyQjtJQWZhLFdBQUEsUUFBUTtRQUNwQixPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsVUFBQyxPQUEwQjtZQUN0RSxNQUFNLENBQUM7Z0JBQ0wsT0FBTyxFQUFFLFVBQVMsTUFBTTtvQkFDdEIsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztvQkFDdEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxrQkFBa0IsQ0FBQztvQkFDL0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxrQkFBa0IsQ0FBQztvQkFDcEQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUUxQyxNQUFNLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxHQUFHLFlBQVUsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFHLENBQUM7b0JBQ3RGLENBQUM7b0JBQUEsQ0FBQztvQkFDRixNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUNoQixDQUFDO2FBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxFQWZhLFFBQVEsR0FBUixZQUFRLEtBQVIsWUFBUSxRQWVyQjtBQUFELENBQUMsRUFmUyxHQUFHLEtBQUgsR0FBRyxRQWVaO0FBQUEsQ0FBQyJ9
var app;
(function(app) {
    var Services;
    (function(Services) {
        var HairstyleService = (function() {
            function HairstyleService($resource) {
                this.$resource = $resource;
                this.HairstyleResource = $resource('/api/v1/hairstyles/:id', null, {
                    'update': {
                        method: 'PUT'
                    }
                });
                this.UserHairstylesResource = $resource('/api/v1/hairstyles/user');
            }
            HairstyleService.prototype.saveHairstyle = function(hairstyle) {
                return this.HairstyleResource.save(hairstyle).$promise;
            };;
            HairstyleService.prototype.getAll = function() {
                return this.HairstyleResource.query();
            };;
            HairstyleService.prototype.deleteHairstyle = function(hairstyle) {
                return this.HairstyleResource.delete({
                    _id: hairstyle
                }).$promise;
            };
            HairstyleService.prototype.getUserHairstyles = function() {
                return this.UserHairstylesResource.query();
            };
            HairstyleService.prototype.updateHairstyle = function(hairstyle) {
                return this.HairstyleResource.update({
                    id: hairstyle._id
                }, hairstyle).$promise;
            };;
            HairstyleService.prototype.getHairstyle = function(hairstyleId) {
                return this.HairstyleResource.get({
                    id: hairstyleId
                });
            };;
            return HairstyleService;
        }());
        Services.HairstyleService = HairstyleService;
        angular.module('app').service('HairstyleService', HairstyleService);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGFpcnN0eWxlU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkhhaXJzdHlsZVNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxHQUFHLENBcUNaO0FBckNELFdBQVUsR0FBRztJQUFDLElBQUEsUUFBUSxDQXFDckI7SUFyQ2EsV0FBQSxRQUFRO1FBQ3BCO1lBNEJFLDBCQUNVLFNBQXVDO2dCQUF2QyxjQUFTLEdBQVQsU0FBUyxDQUE4QjtnQkFFL0MsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFDLEVBQUMsQ0FBQyxDQUFDO2dCQUNsRyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsU0FBUyxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFDckUsQ0FBQztZQTdCTSx3Q0FBYSxHQUFwQixVQUFxQixTQUFTO2dCQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDekQsQ0FBQztZQUFBLENBQUM7WUFFSyxpQ0FBTSxHQUFiO2dCQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDeEMsQ0FBQztZQUFBLENBQUM7WUFFSywwQ0FBZSxHQUF0QixVQUF1QixTQUFTO2dCQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUNwRSxDQUFDO1lBRU0sNENBQWlCLEdBQXhCO2dCQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDN0MsQ0FBQztZQUVNLDBDQUFlLEdBQXRCLFVBQXVCLFNBQVM7Z0JBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxHQUFHLEVBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDaEYsQ0FBQztZQUFBLENBQUM7WUFFSyx1Q0FBWSxHQUFuQixVQUFvQixXQUFXO2dCQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxFQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUMsQ0FBQyxDQUFDO1lBQ3ZELENBQUM7WUFPQSxDQUFDO1lBQ0osdUJBQUM7UUFBRCxDQUFDLEFBbENELElBa0NDO1FBbENZLHlCQUFnQixtQkFrQzVCLENBQUE7UUFDRCxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3RFLENBQUMsRUFyQ2EsUUFBUSxHQUFSLFlBQVEsS0FBUixZQUFRLFFBcUNyQjtBQUFELENBQUMsRUFyQ1MsR0FBRyxLQUFILEdBQUcsUUFxQ1oifQ==
var app;
(function(app) {
    var Services;
    (function(Services) {
        var IGConverterService = (function() {
            function IGConverterService($resource) {
                this.$resource = $resource;
                this.igapiresource = $resource('api/v1/igurl');
            }
            IGConverterService.prototype.getIgUrl = function(igurl) {
                var igobj = {};
                igobj.url = igurl;
                return this.igapiresource.save(igobj).$promise;
            };;
            return IGConverterService;
        }());
        Services.IGConverterService = IGConverterService;
        angular.module('app').service('IGConverterService', IGConverterService);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSUdDb252ZXJ0ZXJTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSUdDb252ZXJ0ZXJTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsR0FBRyxDQWlCWjtBQWpCRCxXQUFVLEdBQUc7SUFBQyxJQUFBLFFBQVEsQ0FpQnJCO0lBakJhLFdBQUEsUUFBUTtRQUNwQjtZQVNFLDRCQUNVLFNBQXVDO2dCQUF2QyxjQUFTLEdBQVQsU0FBUyxDQUE4QjtnQkFFL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDakQsQ0FBQztZQVZNLHFDQUFRLEdBQWYsVUFBZ0IsS0FBSztnQkFDbkIsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUNmLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFBO2dCQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ2pELENBQUM7WUFBQSxDQUFDO1lBT0oseUJBQUM7UUFBRCxDQUFDLEFBZEQsSUFjQztRQWRZLDJCQUFrQixxQkFjOUIsQ0FBQTtRQUNELE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDMUUsQ0FBQyxFQWpCYSxRQUFRLEdBQVIsWUFBUSxLQUFSLFlBQVEsUUFpQnJCO0FBQUQsQ0FBQyxFQWpCUyxHQUFHLEtBQUgsR0FBRyxRQWlCWiJ9
var app;
(function(app) {
    var Services;
    (function(Services) {
        var UserService = (function() {
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
            UserService.prototype.register = function(user) {
                console.log(user);
                return this.UserRegisterResource.save(user).$promise;
            };;
            UserService.prototype.login = function(user) {
                return this.UserLoginResource.save(user).$promise;
            };
            UserService.prototype.setUser = function() {
                var u = JSON.parse(atob(this.$window.localStorage.getItem('token').split('.')[1]));
                this.status._id = u._id;
                this.status.username = u.username;
                this.status.email = u.email;
                this.status.isTakingWalkins = u.isTakingWalkins;
            };
            UserService.prototype.removeToken = function() {
                this.$window.localStorage.removeItem('token');
            };
            UserService.prototype.removeUser = function() {
                this.status._id = null;
                this.status.username = null;
                this.status.email = null;
                this.status.isTakingWalkins = null;
            };;
            UserService.prototype.getToken = function() {
                return this.$window.localStorage.getItem('token');
            };
            UserService.prototype.getUserHairstyles = function() {
                return this.UserResource.query().$promise;
            };
            UserService.prototype.getUser = function(username) {
                var q = this.$q.defer();
                this.$http.get('/api/v1/users/' + username).then(function(res) {
                    q.resolve(res);
                }, function(err) {
                    q.reject(err);
                });
                return q.promise;
            };;
            UserService.prototype.updateUserInfo = function(user) {
                var q = this.$q.defer();
                this.$http.put('/api/v1/users', user).then(function(res) {
                    q.resolve(res.data);
                }, function(err) {
                    console.error("Error trying to update user information", err);
                    q.reject(err);
                });
                return q.promise;
            };
            UserService.prototype.setWalkin = function(walkinStatus) {
                var q = this.$q.defer();
                this.$http.put('/api/v1/users/status', walkinStatus).then(function(res) {
                    q.resolve(res.data);
                }, function(err) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIn0=