angular.module('app').directive('datePicker', function () { return ({
    restrict: 'A',
    link: function (scope, elem, attrs) {
        var today = new Date();
        var max_Date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 5);
        console.log(max_Date);
        console.log(today);
        $('#date').calendar({
            onChange: function (date) {
                $('#leDate').val(date).trigger("change");
            },
            type: 'date',
            minDate: today,
            maxDate: max_Date,
            formatter: {
                date: function (date, settings) {
                    if (!date)
                        return '';
                    var day = date.getDate();
                    var month = date.getMonth() + 1;
                    var year = date.getFullYear();
                    return day + '-' + month + '-' + year;
                }
            }
        });
        $('#time').calendar({
            onChange: function (date) {
                $('#leTime').val(date.toTimeString()).trigger("change");
            },
            type: 'time'
        });
        $('#calDatePicker').calendar({
            onChange: function (date) {
                $('#pickedDayVal').val(date.toDateString()).trigger("change");
            },
            type: 'date'
        });
        $('#calDatePickerMobile').calendar({
            onChange: function (date) {
                $('#pickedDayValMobile').val(date.toDateString()).trigger("change");
            },
            type: 'date'
        });
    }
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZVBpY2tlckRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRhdGVQaWNrZXJEaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLGNBQU0sT0FBQSxDQUFDO0lBQ25ELFFBQVEsRUFBRSxHQUFHO0lBQ2IsSUFBSSxFQUFFLFVBQVUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLO1FBQ2hDLElBQUksS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRW5CLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDbEIsUUFBUSxFQUFFLFVBQVMsSUFBSTtnQkFDckIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDM0MsQ0FBQztZQUNELElBQUksRUFBRSxNQUFNO1lBQ1osT0FBTyxFQUFFLEtBQUs7WUFDZCxPQUFPLEVBQUUsUUFBUTtZQUNqQixTQUFTLEVBQUU7Z0JBQ1QsSUFBSSxFQUFFLFVBQVUsSUFBSSxFQUFFLFFBQVE7b0JBQzVCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO3dCQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7b0JBQ3JCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDekIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDaEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUM5QixNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQztnQkFDeEMsQ0FBQzthQUNGO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUNsQixRQUFRLEVBQUUsVUFBUyxJQUFJO2dCQUNyQixDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMxRCxDQUFDO1lBQ0QsSUFBSSxFQUFFLE1BQU07U0FDYixDQUFDLENBQUM7UUFFSCxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDM0IsUUFBUSxFQUFFLFVBQVMsSUFBSTtnQkFDckIsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDaEUsQ0FBQztZQUNELElBQUksRUFBRSxNQUFNO1NBQ2IsQ0FBQyxDQUFBO1FBRUYsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ2pDLFFBQVEsRUFBRSxVQUFTLElBQUk7Z0JBQ3JCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEUsQ0FBQztZQUNELElBQUksRUFBRSxNQUFNO1NBQ2IsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsRUEvQ2tELENBK0NsRCxDQUFDLENBQUMifQ==