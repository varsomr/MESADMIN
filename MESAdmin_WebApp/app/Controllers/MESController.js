(function () {
    //*****************************add-on for Grid Dropdown trial - IH 9/29/2017

    
    angular
        .module('myApp')
        //.module('myApp', ['ui.grid', 'ui.grid.edit', 'ui.grid.cellNav', 'gridFilters'])
        .controller('MEScontroller', controller);//.controller('StaticController', controllerstaticgrid);

    controller.$inject = ['$scope', '$timeout', 'uiGridConstants'];

    app.config(function ($httpProvider) {

    });

     
    
        
    
    function controller($scope, $timeout, uiGridConstants, MESService) {
        $scope.LogIn = function () {
            if (document.getElementById("Password").value !== "") {
                var toLower = document.getElementById("UserName").value.toLowerCase();
                //document.getElementById("LoggedIn").value = toLower;
                document.getElementById("UserName").value = "";
                document.getElementById("Password").value = "";
                redirectUID('#/Project?uname=' + toLower);
            }
            else {
                document.getElementById("LoggedIn").value = "Password Needed!"
            }

            //if (this.innerHTML == "LogIn") this.innerHTML = "LogOut";
            //else
            this.innerHTML = "LogOut";

        };
        $("#Password").keydown(function (e) {
            if (e.which === 13) {
                $("#login").click();
            }
        });
    }

})();


    function redirectUID(url) {
            var queryString = document.getElementById("LoggedIn").value;
            window.location.href =url + queryString+"&dom=DEN";
        }





