'use strict';
namespace app.Controller{
  export class NavbarController{
    
    public showNav;
    public status;
    
    public logout(){
      this.showNav = false;
      console.log(`showNav=${this.showNav}`)
      this.UserService.removeToken();
      this.UserService.removeUser();
      this.$state.go("Home", {}, {reload: true});
      this.$animate.enabled(false);
      // this.$window.location.reload()
    };

    constructor(
      private UserService: app.Services.UserService,
      private $state: ng.ui.IStateService,
      private $location: ng.ILocationService,
      private $window,
      private $animate
    ){
      if(this.UserService.getToken()){
        this.status = UserService.status;
        console.log(`navbar should show: ${this.status.username}`)
      }
    };
  }
  angular.module('app').controller('NavbarController', NavbarController);
}
