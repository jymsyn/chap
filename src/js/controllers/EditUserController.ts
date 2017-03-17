namespace app.Controllers {
  export class EditUserController {
    public IGUrl;
    public user;
    public alreadyUploaded;
    
    public updateProfile(){
      this.user.address = `${this.user.streetAddress} ${this.user.city}, ${this.user.state}`;
      
      this.geocoder(()=>{
        this.IGConverterService.getIgUrl(this.user.igurl).then((res) => {
          this.user.igurl = res.image;
          console.log(this.user)
          this.UserService.updateUserInfo(this.user).then((res)=>{
            console.log(res)
            this.alreadyUploaded = true;
            this.$state.go('UserAccount');
          })
        });
      });
    };
    
    private geocoder(cb){
      var geo = new google.maps.Geocoder();
      geo.geocode( { "address": this.user.address }, (results, status) => {
        if (status == google.maps.GeocoderStatus.OK && results.length > 0) {
          this.user.location = results[0].geometry.location;
          cb();
        } else {
          console.log("something wrong happened")
        }
      });
    }
    
    constructor(
      private IGConverterService: app.Services.IGConverterService,
      private UserService: app.Services.UserService,
      private $window,
      private $state
    ){
      UserService.getUser(UserService.status.username).then((res) => {
        if(res.data.igurl) {
          this.alreadyUploaded = true;
          console.log(`Ig url has already been uploaded: ${this.alreadyUploaded}`)
        }  
        this.user = res.data;
        console.log(this.user);
      });
    }
  }
  angular.module('app').controller('EditUserController', EditUserController);
}