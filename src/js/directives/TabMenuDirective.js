angular.module('app').directive('tabMenu', function () { return ({
    restrict: 'A',
    link: function (scope, elem, attrs) {
        $(".menu>[data-tab=first]").tab();
        $(".menu>[data-tab=second]").tab();
        $(".menu>[data-tab=third]").tab();
    }
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFiTWVudURpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRhYk1lbnVEaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLGNBQU0sT0FBQSxDQUFDO0lBQ2hELFFBQVEsRUFBRSxHQUFHO0lBQ2IsSUFBSSxFQUFFLFVBQVUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLO1FBQ2hDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2xDLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFBO1FBQ2xDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFBO0lBQ25DLENBQUM7Q0FDRixDQUFDLEVBUCtDLENBTy9DLENBQUMsQ0FBQyJ9