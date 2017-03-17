namespace app.Services{
  export class HairstyleService{
    public HairstyleResource;
    public UserHairstylesResource;

    public saveHairstyle(hairstyle){
      return this.HairstyleResource.save(hairstyle).$promise;
    };

    public getAll(){
      return this.HairstyleResource.query();
    };

    public deleteHairstyle(hairstyle){
      return this.HairstyleResource.delete({ _id: hairstyle }).$promise;
    }

    public getUserHairstyles(){
      return this.UserHairstylesResource.query();
    }
    
    public updateHairstyle(hairstyle){
      return this.HairstyleResource.update({id: hairstyle._id}, hairstyle).$promise;
    };
    
    public getHairstyle(hairstyleId){
      return this.HairstyleResource.get({id: hairstyleId});
    }

    constructor(
      private $resource: ng.resource.IResourceService
    ){
      this.HairstyleResource = $resource('/api/v1/hairstyles/:id', null, { 'update': { method: 'PUT'}});
      this.UserHairstylesResource = $resource('/api/v1/hairstyles/user');
    };
  }
  angular.module('app').service('HairstyleService', HairstyleService);
}
