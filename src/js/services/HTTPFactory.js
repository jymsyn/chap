'use strict';
var app;
(function (app) {
    var Services;
    (function (Services) {
        angular.module('app').factory('HTTPFactory', function ($window) {
            return {
                request: function (config) {
                    config.headers = config.headers || {};
                    config.headers['Accepts'] = 'application/json';
                    config.headers['Content-Type'] = 'application/json';
                    if ($window.localStorage.getItem('token')) {
                        config.headers['Authorization'] = "Bearer " + $window.localStorage.getItem('token');
                    }
                    ;
                    return config;
                }
            };
        });
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSFRUUEZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJIVFRQRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixJQUFVLEdBQUcsQ0FlWjtBQWZELFdBQVUsR0FBRztJQUFDLElBQUEsUUFBUSxDQWVyQjtJQWZhLFdBQUEsUUFBUTtRQUNwQixPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsVUFBQyxPQUEwQjtZQUN0RSxNQUFNLENBQUM7Z0JBQ0wsT0FBTyxFQUFFLFVBQVMsTUFBTTtvQkFDdEIsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztvQkFDdEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxrQkFBa0IsQ0FBQztvQkFDL0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxrQkFBa0IsQ0FBQztvQkFDcEQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUUxQyxNQUFNLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxHQUFHLFlBQVUsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFHLENBQUM7b0JBQ3RGLENBQUM7b0JBQUEsQ0FBQztvQkFDRixNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUNoQixDQUFDO2FBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxFQWZhLFFBQVEsR0FBUixZQUFRLEtBQVIsWUFBUSxRQWVyQjtBQUFELENBQUMsRUFmUyxHQUFHLEtBQUgsR0FBRyxRQWVaO0FBQUEsQ0FBQyJ9