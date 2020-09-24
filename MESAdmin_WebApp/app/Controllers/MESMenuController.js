(function () {
    angular
        .module('myApp')
        .controller('MESMenucontroller', controller)

    controller.$inject = ['$scope', '$timeout', 'uiGridConstants', 'ProjectService'];

    app.config(function ($httpProvider) {

    });

    function controller($scope, $timeout, uiGridConstants, MESMenuService) {
        $scope.function_one = function (url) {
            var name = 'uname';
            //function function_two(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            var uid = decodeURIComponent(results[2].replace(/\+/g, " "))
            $scope.title = uid;
            document.getElementById('LoggedIn').value = uid;   
        }
        $scope.function_one();
    }

    addEventListener("click", function () {
        var
            el = document.documentElement
            , rfs =
                el.requestFullScreen
                || el.webkitRequestFullScreen
                || el.mozRequestFullScreen
            ;
        rfs.call(el);
    });



})();

