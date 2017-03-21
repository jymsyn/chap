namespace app.Services {
  export class UserService {
    public status = {
      _id: Number,
      username: String,
      email: String
    };
    
    public UserResource;
    public UserRegisterResource;
    public UserLoginResource;
    
    public register(user){
      return this.UserRegisterResource.save(user).$promise;
    };
    
    public login(user) {
      return this.UserLoginResource.save(user).$promise;
    }
    
    public setUser() {
      let u = JSON.parse(atob(this.$window.localStorage.getItem('token').split('.')[1]));
      this.status._id = u._id;
      this.status.username = u.username;
      this.status.email = u.email;
    }
    
    public removeToken(){
      this.$window.localStorage.removeItem('token');
    }
    
    public removeUser(){
      this.status._id = null;
      this.status.username = null;
      this.status.email = null;
    };
    
    public getToken() {
      return this.$window.localStorage.getItem('token');
    }
    
    public getUserHairstyles(){
      return this.UserResource.query().$promise;
    }
    
    public getUser(username){
      let q = this.$q.defer();
      this.$http.get('/api/v1/users/' + username).then((res)=>{
        q.resolve(res);
      }, (err)=>{
        q.reject(err);
      });
      return q.promise;
    };
    
    public updateUserInfo(user){
      let q = this.$q.defer();
      this.$http.put('/api/v1/users', user).then((res)=>{
        q.resolve(res.data);
      }, (err)=>{
        console.error("Error trying to update user information", err)
        q.reject(err);
      });
      return q.promise;
    }
    

    
    constructor(
      private IGConverterService: app.Services.IGConverterService,
      private $resource: ng.resource.IResourceService,
      private $window: ng.IWindowService,
      private $http: ng.IHttpService,
      private $q: ng.IQService
    ){
      this.UserResource = $resource('api/v1/users');
      this.UserRegisterResource = $resource('api/v1/users/register');
      this.UserLoginResource = $resource('api/v1/users/login');
      if(this.getToken()) this.setUser();
    }
  }
  angular.module('app').service('UserService', UserService);
}