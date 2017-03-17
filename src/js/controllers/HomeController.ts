namespace app.Controllers {
  export class HomeController {
    public loginRefresh(){
      this.$state.go("Login", {}, {reload: true});
    };
    
    public registerRefresh(){
      this.$state.go("Register", {}, {reload: true});
    };
    
    constructor(
      private $state
    ) {

    }
  }

  angular.module('app').controller('HomeController', HomeController);
}