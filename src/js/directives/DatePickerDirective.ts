angular.module('app').directive('datePicker', () => ({
  restrict: 'A',
  link: function (scope, elem, attrs) {
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
        date: function (date, settings) {
          if (!date) return '';
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
    })
    
    $('#calDatePickerMobile').calendar({
      onChange: function(date) {
        $('#pickedDayValMobile').val(date.toDateString()).trigger("change");
      },
      type: 'date'
    })
  }
}));​