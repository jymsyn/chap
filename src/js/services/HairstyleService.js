var app;
(function (app) {
    var Services;
    (function (Services) {
        var HairstyleService = (function () {
            function HairstyleService($resource) {
                this.$resource = $resource;
                this.HairstyleResource = $resource('/api/v1/hairstyles/:id', null, { 'update': { method: 'PUT' } });
                this.UserHairstylesResource = $resource('/api/v1/hairstyles/user');
            }
            HairstyleService.prototype.saveHairstyle = function (hairstyle) {
                return this.HairstyleResource.save(hairstyle).$promise;
            };
            ;
            HairstyleService.prototype.getAll = function () {
                return this.HairstyleResource.query();
            };
            ;
            HairstyleService.prototype.deleteHairstyle = function (hairstyle) {
                return this.HairstyleResource.delete({ _id: hairstyle }).$promise;
            };
            HairstyleService.prototype.getUserHairstyles = function () {
                return this.UserHairstylesResource.query();
            };
            HairstyleService.prototype.updateHairstyle = function (hairstyle) {
                return this.HairstyleResource.update({ id: hairstyle._id }, hairstyle).$promise;
            };
            ;
            HairstyleService.prototype.getHairstyle = function (hairstyleId) {
                return this.HairstyleResource.get({ id: hairstyleId });
            };
            ;
            return HairstyleService;
        }());
        Services.HairstyleService = HairstyleService;
        angular.module('app').service('HairstyleService', HairstyleService);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGFpcnN0eWxlU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkhhaXJzdHlsZVNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxHQUFHLENBcUNaO0FBckNELFdBQVUsR0FBRztJQUFDLElBQUEsUUFBUSxDQXFDckI7SUFyQ2EsV0FBQSxRQUFRO1FBQ3BCO1lBNEJFLDBCQUNVLFNBQXVDO2dCQUF2QyxjQUFTLEdBQVQsU0FBUyxDQUE4QjtnQkFFL0MsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFDLEVBQUMsQ0FBQyxDQUFDO2dCQUNsRyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsU0FBUyxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFDckUsQ0FBQztZQTdCTSx3Q0FBYSxHQUFwQixVQUFxQixTQUFTO2dCQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDekQsQ0FBQztZQUFBLENBQUM7WUFFSyxpQ0FBTSxHQUFiO2dCQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDeEMsQ0FBQztZQUFBLENBQUM7WUFFSywwQ0FBZSxHQUF0QixVQUF1QixTQUFTO2dCQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUNwRSxDQUFDO1lBRU0sNENBQWlCLEdBQXhCO2dCQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDN0MsQ0FBQztZQUVNLDBDQUFlLEdBQXRCLFVBQXVCLFNBQVM7Z0JBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxHQUFHLEVBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDaEYsQ0FBQztZQUFBLENBQUM7WUFFSyx1Q0FBWSxHQUFuQixVQUFvQixXQUFXO2dCQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxFQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUMsQ0FBQyxDQUFDO1lBQ3ZELENBQUM7WUFPQSxDQUFDO1lBQ0osdUJBQUM7UUFBRCxDQUFDLEFBbENELElBa0NDO1FBbENZLHlCQUFnQixtQkFrQzVCLENBQUE7UUFDRCxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3RFLENBQUMsRUFyQ2EsUUFBUSxHQUFSLFlBQVEsS0FBUixZQUFRLFFBcUNyQjtBQUFELENBQUMsRUFyQ1MsR0FBRyxLQUFILEdBQUcsUUFxQ1oifQ==