'use strict';
namespace app {
  angular.module('app', ['ui.router', 'ngResource', 'ngAnimate', 'ui.mask', 'ngMap'])
    .config((
    $stateProvider: ng.ui.IStateProvider,
    $locationProvider: ng.ILocationProvider,
    $httpProvider: ng.IHttpProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider) => {

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
  .run(($rootScope, $animate)=> {
      $animate.enabled(false);
      $rootScope.pageanimate = false;
      
      $rootScope.toggleAnimate = function () {
        if ($rootScope.pageanimate === true) {
          $rootScope.pageanimate = false;
          $animate.enabled(false);
          console.log($rootScope.pageanimate)
        } else {
          $rootScope.pageanimate = true;
          $animate.enabled(true);
          console.log($rootScope.pageanimate)
        }
      };
    });
}
