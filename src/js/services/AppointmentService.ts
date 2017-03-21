'use strict';
namespace app.Services{
  export class AppointmentService{
    
    public twilioAPIResource;
    public AppointmentResource;

    public saveAppt(appt){
      return this.AppointmentResource.save(appt).$promise;
    }

    public getAllBarberAppointments(){
      return this.AppointmentResource.query().$promise;
    }
    
    public sendMessage(message) {
      return this.twilioAPIResource.save(message).$promise;
    }
    
    public setStatus(status) {
      let q = this.$q.defer();
      this.$http.put('/api/v1/appointments', status).then((res) => {
        q.resolve(res.data);
      }, (err) => {
        q.reject(err);
      })
      return this.AppointmentResource.update(status).$promise;
    }
    
    public convertDate(appointment){
      let convertedDate = appointment.appointmentDate.split(' ').splice(0,4); 
      appointment.appointmentDate = convertedDate.join(' ');
      
      let aDate = new Date(appointment.appointmentDate)
      appointment.date = moment(aDate).format("YYYY-M-D");
      
      let aTime = appointment.appointmentTime.split(' ')[0]
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
      appointment.appointmentTime = aTime;
      console.log(appointment)
      return appointment;
    }

    constructor(
      private $resource: ng.resource.IResourceService,
      private $http: ng.IHttpService,
      private $q: ng.IQService
    ){
      this.AppointmentResource = $resource('/api/v1/appointments/:id', null, { 'update': { method: 'PUT'}});
      this.twilioAPIResource = $resource('/api/v1/twilio');
    };
  }
  angular.module('app').service('AppointmentService', AppointmentService);
}
