// namespace app.Directives {
//   export class NavbarDirective implements ng.IDirective {
//     public templateUrl = '../../templates/footer.html';
//     public restrict = 'E';
//     public controller: 'NavbarController';
//     public controllerAs = 'vm';
//     
//     constructor(){
//       
//     }
//   }
//   angular.module('app').directive('footer', NavbarDirective);
// }

angular.module('app').directive('footer', () => ({
  templateUrl: '../../templates/footer.html',
  restrict: 'E'
}));
