angular.module('app').directive('apptModal', () => ({
  restrict: 'A',
  link: function (scope, elem, attrs) {
    $('#hiddenBtn').click(function(){
      $('.ui.modal').modal('show');
    })
  }
}));​