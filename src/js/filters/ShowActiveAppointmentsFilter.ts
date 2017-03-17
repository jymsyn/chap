angular.module('app').filter('showActiveAppointments', function(){
    return function(items) {
      var arrayToReturn = [];        
      for (var i=0; i<items.length; i++){
          var date = items[i].date;
          if (date > new Date())  {
              arrayToReturn.push(items[i]);
          }
      }
      return arrayToReturn;
   };
});​