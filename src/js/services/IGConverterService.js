var app;
(function (app) {
    var Services;
    (function (Services) {
        var IGConverterService = (function () {
            function IGConverterService($resource) {
                this.$resource = $resource;
                this.igapiresource = $resource('api/v1/igurl');
            }
            IGConverterService.prototype.getIgUrl = function (igurl) {
                var igobj = {};
                igobj.url = igurl;
                return this.igapiresource.save(igobj).$promise;
            };
            ;
            return IGConverterService;
        }());
        Services.IGConverterService = IGConverterService;
        angular.module('app').service('IGConverterService', IGConverterService);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSUdDb252ZXJ0ZXJTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSUdDb252ZXJ0ZXJTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsR0FBRyxDQWlCWjtBQWpCRCxXQUFVLEdBQUc7SUFBQyxJQUFBLFFBQVEsQ0FpQnJCO0lBakJhLFdBQUEsUUFBUTtRQUNwQjtZQVNFLDRCQUNVLFNBQXVDO2dCQUF2QyxjQUFTLEdBQVQsU0FBUyxDQUE4QjtnQkFFL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDakQsQ0FBQztZQVZNLHFDQUFRLEdBQWYsVUFBZ0IsS0FBSztnQkFDbkIsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUNmLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFBO2dCQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ2pELENBQUM7WUFBQSxDQUFDO1lBT0oseUJBQUM7UUFBRCxDQUFDLEFBZEQsSUFjQztRQWRZLDJCQUFrQixxQkFjOUIsQ0FBQTtRQUNELE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDMUUsQ0FBQyxFQWpCYSxRQUFRLEdBQVIsWUFBUSxLQUFSLFlBQVEsUUFpQnJCO0FBQUQsQ0FBQyxFQWpCUyxHQUFHLEtBQUgsR0FBRyxRQWlCWiJ9