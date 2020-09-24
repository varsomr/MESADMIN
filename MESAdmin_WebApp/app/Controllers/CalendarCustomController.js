


(function () {
    angular
        .module('myApp')
        .controller('Calendarcontroller', controller);

    controller.$inject = ['$scope', '$timeout', 'uiGridConstants', 'CalendarService'];

    app.config(function ($httpProvider) {

    });



    function controller($scope, $timeout, uiGridConstants, CalendarService) {
        $(function () {
            var nav = "#" + "datepicker";
            console.log(nav);
            $(nav).datepicker();
        });
    }

})();

