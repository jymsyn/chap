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
      let appointment = this.AppointmentService.convertDate(this.appointment);
      appointment.status = 'active';
      let appt = appointment; //forcing status property to append to appointment object
      this.AppointmentService.saveAppt(appt).then((res)=>{
        console.log(res);
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
