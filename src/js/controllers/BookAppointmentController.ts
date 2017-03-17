'use strict'
namespace app.Controllers{
  export class BookAppointmentController{
    public appointment;
    
    public submitAppt(){
      this.AppointmentService.saveAppt(this.appointment).then((res)=>{
        this.$location.path('/appointments');
      });
    };

    constructor(
      private AppointmentService: app.Services.AppointmentService,
      private UserService: app.Services.UserService,
      private $location: ng.ILocationService
    ){
    }
  }
  angular.module('app').controller('BookAppointmentController', BookAppointmentController);
}
