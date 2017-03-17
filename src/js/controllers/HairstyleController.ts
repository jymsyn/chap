'use strict'
namespace app.Controllers{
  export class HairstyleController{
    public hairstyle={};
    public editedStyle={};
    public styles=[];
    public editing = false;

    public addHairstyle(){
      console.log("hitting")
      this.HairstyleService.saveHairstyle(this.hairstyle).then((res)=>{
        this.hairstyle = null;
        console.log(res.name)
        this.styles.push(res);
        // this.$window.location.reload()
        // this.$state.go("ManageHairstyles", {}, {reload: true});
      })
    };
    
    public delete(hairstyle){
      this.HairstyleService.deleteHairstyle(hairstyle._id).then((res)=>{
        this.styles.splice(this.styles.indexOf(hairstyle), 1)
        console.log(res.message);
      });
    };
    
    public showEdit(){
      this.editing === !this.editing;
      console.log(this.editing)
    }
    
    
    

    constructor(
      private HairstyleService: app.Services.HairstyleService,
      private UserService: app.Services.UserService,
      private $window: ng.IWindowService,
      private $state: ng.ui.IStateService
    ){
      this.styles = HairstyleService.getUserHairstyles();
      console.log(this.styles)
    }
  }
  angular.module('app').controller('HairstyleController', HairstyleController);
}
