angular.module('app').directive('apptModal', function () { return ({
    restrict: 'A',
    link: function (scope, elem, attrs) {
        $('#hiddenBtn').click(function () {
            $('.ui.modal').modal('show');
        });
    }
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWxEaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNb2RhbERpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsY0FBTSxPQUFBLENBQUM7SUFDbEQsUUFBUSxFQUFFLEdBQUc7SUFDYixJQUFJLEVBQUUsVUFBVSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUs7UUFDaEMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNwQixDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsRUFQaUQsQ0FPakQsQ0FBQyxDQUFDIn0=