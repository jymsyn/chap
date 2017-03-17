namespace app.Controllers {
  export class EditHairstyleController {
    public hairstyle;
    
    public update(){
      this.HairstyleService.updateHairstyle(this.hairstyle).then((res) => {
        this.$state.go("ManageHairstyles", {}, {reload: true});
      })
    };
    

    constructor(
      private HairstyleService: app.Services.HairstyleService,
      private $state,
      private $stateParams: ng.ui.IStateParamsService
    ) {
      this.hairstyle = HairstyleService.getHairstyle($stateParams['id']);
      console.log($stateParams['id'])
    }
  }

  angular.module('app').controller('EditHairstyleController', EditHairstyleController);
}