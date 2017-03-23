angular.module('app').directive('tabMenu', () => ({
  restrict: 'A',
  link: function (scope, elem, attrs) {  
    $(".menu>[data-tab=first]").tab();
    $(".menu>[data-tab=second]").tab()
    $(".menu>[data-tab=third]").tab()
  }
}));​