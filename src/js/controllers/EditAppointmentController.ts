'use strict'
let moment;
namespace app.Controllers{
  export class EditAppointmentController{
    public appointment;
    
    public setDate(){
      let dateStringArr = this.date.split(' ').splice(0,3);
      this.dateString = dateStringArr.join(' ');
      console.log(`the date is ${this.date}`)
    }
    
    public resetDate(){
      this.date = '';
    }
    
    constructor(
      private AppointmentService: app.Services.AppointmentService,
      private UserService: app.Services.UserService,
      private $location: ng.ILocationService
    ){
      AppointmentService.getAllBarberAppointments().then((res) => {
        this.appointments = res;
      });
      this.isMobile = window.innerWidth <= 990
      console.log(this.isMobile)
      console.log(window.innerWidth)
    }
  }
  angular.module('app').controller('EditAppointmentController', EditAppointmentController);
}
