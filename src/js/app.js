'use strict';
var app;
(function (app) {
    angular.module('app', ['ui.router', 'ngResource', 'ngAnimate', 'ui.mask', 'ngMap'])
        .config(function ($stateProvider, $locationProvider, $httpProvider, $urlRouterProvider) {
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
        .run(function ($rootScope, $animate) {
        $animate.enabled(false);
        $rootScope.pageanimate = false;
        $rootScope.toggleAnimate = function () {
            if ($rootScope.pageanimate === true) {
                $rootScope.pageanimate = false;
                $animate.enabled(false);
                console.log($rootScope.pageanimate);
            }
            else {
                $rootScope.pageanimate = true;
                $animate.enabled(true);
                console.log($rootScope.pageanimate);
            }
        };
    });
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQVUsR0FBRyxDQXlGWjtBQXpGRCxXQUFVLEdBQUc7SUFDWCxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNoRixNQUFNLENBQUMsVUFDUixjQUFvQyxFQUNwQyxpQkFBdUMsRUFDdkMsYUFBK0IsRUFDL0Isa0JBQTRDO1FBRTVDLGNBQWMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQzNCLEdBQUcsRUFBRSxHQUFHO1lBQ1IsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxVQUFVLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxjQUFjO1lBQzFDLFlBQVksRUFBRSxJQUFJO1NBQ25CLENBQUM7YUFDRCxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ2QsR0FBRyxFQUFFLFFBQVE7WUFDYixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFVBQVUsRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLGNBQWM7WUFDMUMsWUFBWSxFQUFFLElBQUk7U0FDbkIsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFVLEVBQUU7WUFDakIsR0FBRyxFQUFFLFdBQVc7WUFDaEIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxVQUFVLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxjQUFjO1lBQzFDLFlBQVksRUFBRSxJQUFJO1NBQ25CLENBQUM7YUFDRCxLQUFLLENBQUMsYUFBYSxFQUFFO1lBQ3BCLEdBQUcsRUFBRSxVQUFVO1lBQ2YsV0FBVyxFQUFFLGlDQUFpQztZQUM5QyxVQUFVLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxrQkFBa0I7WUFDOUMsWUFBWSxFQUFFLElBQUk7U0FDbkIsQ0FBQzthQUNELEtBQUssQ0FBQyxjQUFjLEVB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