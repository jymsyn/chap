'use strict';
namespace app.Controllers{
  export class ProfileController{
    public profile;
    public map;
    public maxDate;
    public markers;
    public googleMapsUrl;
    public loading = false;
    
    public appointment={
      barber: String,
      appointmentDay: String,
      appointmentDate: String,
      date: String,
      time: String
    };
    
    public submitAppt(){
      this.loading= true;
      let convertedDate = this.appointment.appointmentDate.split(' ').splice(0,4); 
      this.appointment.appointmentDate = convertedDate.join(' ');
      
      let aDate = new Date(this.appointment.appointmentDate)
      this.appointment.date = moment(aDate).format("YYYY-M-D");
      
      let aTime = this.appointment.appointmentTime.split(' ')[0]
      let hour = aTime.split(':')[0];
      let minute =  aTime.split(':')[1];
      if (hour > 12) {
        if (hour - 12 > 0) {
          aTime = `${hour-12}:${minute} pm`
        } 
      } else if (hour == 12) {
          aTime = `${hour}:${minute} pm`
      } else {
        aTime = `${hour}:${minute} am`
      }
      this.appointment.appointmentTime = aTime;
      console.log(this.appointment);
      this.AppointmentService.saveAppt(this.appointment).then((res)=>{
        this.$location.path('/reservationcomplete');
      });
    };

    constructor(
      private AppointmentService: app.Services.AppointmentService,
      private UserService: app.Services.UserService,
      private $stateParams: ng.ui.IStateParamsService,
      private $location: ng.ILocationService,
      private $scope
    ){
      UserService.getUser($stateParams['username']).then((res) => {
        this.profile = res.data;
        this.appointment.barber = this.profile._id
        this.$scope.position = [this.profile.location.lat, this.profile.location.lng]
        console.log(this.$scope.position)
      });
      let today = new Date();
      this.maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 5);
      this.googleMapsUrl = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCLJoF1zdrJ7OmtYYw37yDyN7JHJpC-moI';
    };
  }
  angular.module('app').controller('ProfileController', ProfileController);
}
