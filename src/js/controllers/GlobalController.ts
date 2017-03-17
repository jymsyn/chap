namespace app.Controllers {
  export class GlobalController {
    public homepage = true;

    constructor() {

    }
  }

  angular.module('app').controller('GlobalController', GlobalController);
}