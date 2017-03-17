angular.module('app').directive('tabMenu', () => ({
  restrict: 'A',
  link: function (scope, elem, attrs) {  
    $(".menu>[data-tab=first]").tab({
      apiSettings: {
        loadingDuration: 3000,
        mockResponse: function(settings) {

          return "This is response for tab first";
        }
      }
    });
    $(".menu>[data-tab=second]").tab()
    $(".menu>[data-tab=third]").tab()
  }
}));​