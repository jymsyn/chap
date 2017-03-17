angular.module('app').directive('navbar', () => ({
  templateUrl: '../../templates/navbar.html',
  restrict: 'E',
  controller: 'NavbarController',
  controllerAs: 'nc'
}));
