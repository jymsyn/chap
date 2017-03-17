namespace app.Services {
  export class IGConverterService {
    public igapiresource;
    
    public getIgUrl(igurl){
      let igobj = {};
      igobj.url = igurl
      return this.igapiresource.save(igobj).$promise;
    };
    
    constructor(
      private $resource: ng.resource.IResourceService
    ){
      this.igapiresource = $resource('api/v1/igurl');
    }
  }
  angular.module('app').service('IGConverterService', IGConverterService);
}