'use strict'
let moment
namespace app.Controllers{
  export class AppointmentController{
    public showNav;
    public appointments=[];
    public date;
    public dateString;
    public isMobile;
    public modalAppt;
    public today;
    public apptArr=[];
    
    public resetDate(){
      this.date = '';
    }
    
    public showModal(appt){
      console.log(`This is the selected appointment id: ${appt.appointmentDate}`)
      this.modalAppt = appt;
      document.getElementById('hiddenBtn').click();
    }
    
    public sendReminder(){
      this.AppointmentService.sendMessage({
        messageType: 'reminder', 
        apptDate: this.modalAppt.appointmentDate,
        apptTime: this.modalAppt.appointmentTime,
        client_num: this.modalAppt.phone
      }).then((res)=>{
          alert(res.message);
      });
    }
    
    public sendCancel(){
      this.modalAppt.status = 'cancelled';
      this.AppointmentService.setStatus(this.modalAppt).then((res) => {
        this.AppointmentService.sendMessage({
          messageType: 'cancellation', 
          apptDate: this.modalAppt.appointmentDate,
          apptTime: this.modalAppt.appointmentTime,
          client_num: this.modalAppt.phone
        }).then((res) => {
          alert(res.message);
        });
      });
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
      let newDate = new Date().toDateString();
      let todayStr = newDate.split(' ').splice(0,4);
      this.today = todayStr.join(' ');
      this.showNav = true;
    }
  }
  angular.module('app').controller('AppointmentController', AppointmentController);
}
