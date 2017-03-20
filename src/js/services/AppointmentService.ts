'use strict';
namespace app.Services{
  export class AppointmentService{
    
    public twilioAPIResource;
    public AppointmentResource;

    public saveAppt(appt){
      // appt.status = 'Active';
      console.log(appt);
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
