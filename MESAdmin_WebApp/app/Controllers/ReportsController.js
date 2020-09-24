(function () {
    //  'use strict';

    angular
        .module('myApp')
        .controller('Reportscontroller', controller)

    controller.$inject = ['$scope', '$timeout', 'uiGridConstants', 'ReportsService'];

    app.config(function ($httpProvider) {

    });



    function controller($scope, $timeout, uiGridConstants, ReportsService) {

     
       
    }



})();

//function openURL() {
//    var shell = new ActiveXObject("WScript.Shell");
//    shell.run("iexplore http://localhost:94/#/LRSCorp");
//}

function RunFile() {
    WshShell = new ActiveXObject("WScript.Shell");
    WshShell.Run("c:/windows/system32/notepad.exe", 1, false);
}