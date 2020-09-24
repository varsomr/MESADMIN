


(function () {
    angular
        .module('myApp')
        .controller('CalendarFullcontroller', controller)

    controller.$inject = ['$scope', '$timeout', 'uiGridConstants', 'DefectService'];

    app.config(function ($httpProvider) {

    });



    function controller($scope, $timeout, uiGridConstants, CalendarService) {

        //#####Date Time Picker Event######//
        //#####Bootstrap tRYOUTs####////
        $scope.today = function () {
            $scope.dt = new Date();
        };
        $scope.today();

        $scope.clear = function () {
            $scope.dt = null;
        };

        $scope.options = {
            customClass: getDayClass,
            minDate: new Date(),
            showWeeks: true
        };

        // Disable weekend selection
        function disabled(data) {
            var date = data.date,
                mode = data.mode;
            return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
        }

        $scope.toggleMin = function () {
            $scope.options.minDate = $scope.options.minDate ? null : new Date();
        };

        $scope.toggleMin();

        $scope.setDate = function (year, month, day) {
            $scope.dt = new Date(year, month, day);
        };

        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        var afterTomorrow = new Date(tomorrow);
        afterTomorrow.setDate(tomorrow.getDate() + 1);
        $scope.events = [
            {
                date: tomorrow,
                status: 'Full'
            }
            ,
            {
                date: afterTomorrow,
                status: 'Partial'
            }
        ];

        function getDayClass(data) {
            var date = data.date,
                mode = data.mode;
            if (mode === 'day') {
                var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

                for (var i = 0; i < $scope.events.length; i++) {
                    var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);



                    //##### PARTIAL Calendar Display #####////

                    //if (dayToCheck >= currentDay) {

                    //    return $scope.events[i].status;
                    //}
                    //##### PARTIAL Calendar Display #####////    


                    //##### FULL Calendar Display #####////
                    if (dayToCheck === currentDay) {

                        return $scope.events[i].status;
                    }
                    //##### FULL Calendar Display #####////



                }
            }

            return '';
        }
        //#####Bootstrap tRYOUTs####////

        $scope.seldate = function () {

            var frm = document.getElementById("initformFull").value;
            var selday = document.getElementById("SelectedDateFull").innerHTML;

            document.querySelector(frm).value = $scope.FormatDT(selday);
            if (frm == '#date') {
                document.getElementById('EntryDate').value = $scope.FormatDT(selday);
            }
            document.getElementById("mysidenavRightCalendarFull").style.display = 'none';




        }

        $scope.FormatDT = function (date) {
            var d = new Date(date),


                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();

            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;
            return [year, month, day].join('-');

            //   date: new Date(),
            //   time: new Date($filter('d')(new Date(), 'yyyy-MM-dd HH:mm'))


        }

        //#####Date Time Picker Event######//


    }


})();


