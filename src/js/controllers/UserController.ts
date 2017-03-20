namespace app.Controllers {
  export class UserController {
    public userInfo;
    public other = false;
    
    public showOther(){
      this.other = true;
      console.log("hello")
    }
    
    public register(){
      if(this.userInfo.profession2){
        this.userInfo.profession = this.userInfo.profession2;
      };
      
      this.UserService.register(this.userInfo).then((res)=>{
        this.$window.localStorage.setItem('token', res.token);
        this.UserService.setUser();
        this.$state.go("UserAccount", {}, {reload: true});
      })
    };
    
    public login(){
      this.UserService.login(this.userInfo).then((res) => {
        this.$window.localStorage.setItem('token', res.token);
        this.UserService.setUser();
        this.$state.go("Appointments", {}, {reload: true});
      }).catch((err) => {
        alert(err.data.data)
      });
    };

    constructor(
      private UserService: app.Services.UserService,
      private $window,
      private $state
    ){
    }
  }
  angular.module('app').controller('UserController', UserController);
}