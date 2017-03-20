angular.module('app').directive('dropdown', () => ({
  restrict: 'A',
  link: function (scope, elem, attrs) {
    $('.ui.dropdown').dropdown();
  }
}));​