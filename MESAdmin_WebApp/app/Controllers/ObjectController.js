(function () {
    //  'use strict';

    angular
        .module('myApp')
        .controller('ObjectController', controller);

    controller.$inject = ['$scope', '$routeParams', '$timeout', 'ObjectService'];

    app.config(function ($httpProvider) {

    });

    function controller($scope, $routeParams, $timeout, ObjectService) {
        var obj = $routeParams.ObjectID;
        ObjectService.get(obj).success(function (data) {
            if (data == null) {
                $scope.error = true;
                $scope.errorDescription = "No data found for selected criteria.";
            } else {

                $scope.xmlcontent = data;
                //  console.log('Onload');
                $scope.truefalse = true // Making the textarea read only using ng-readonly in Object.html
                // $("#xmlarea").attr("readonly", true); // Making the textarea read only--works fine
                $('#xmlarea').css('background-color', '#DEDEDE'); //Set the text area color to grey
                // $("#saveBtn").attr('disabled', 'disabled');//Disabling save button on load
                $("#saveBtn").hide(); // hiding Save Button
                $scope.error = false;
            }

        }).error(function (data) {

        });

        // On click of Edit or (As Text or As XML ) functionality
        $scope.editTextarea = function () {
            console.log('Edit Button Click');
            $scope.truefalse = false /* Making the textarea read only using ng-readonly in Object.html  */
            $('#xmlarea').css('background-color', '#FFFFFF');/* set the text area color to white */
            // $("#saveBtn").removeAttr('disabled');/* Enabling save button */
            //   $("#saveBtn").show(); /*Show save button */
            var elem = document.getElementById("editbtn"); /* Functionality when  As Text button is clicked */
            if (elem.value == "Add Comment") {
                elem.value = "Cancel"
                $("#saveBtn").show();
            }
            else { /* Functionality when As XML button is Clicked */
                elem.value = "Add Comment";
                $("#saveBtn").hide();
                $scope.truefalse = true;
                $('#xmlarea').css('background-color', '#DEDEDE');
                /* Below code is to reset the xml message to original when XML was edited but not saved and then As XML button was clicked */
                var obj = $routeParams.ObjectID;

                ObjectService.get(obj).success(function (data) {
                    if (data == null) {
                        $scope.error = true;
                        $scope.errorDescription = "No data found for selected criteria.";
                    } else {

                        $scope.xmlcontent = data;
                    }
                });
                // console.log($scope.xmlcontent);
            }

        }
        /* Save Button Functionality */
        $scope.saveTextarea = function () {

          //  console.log(obj);
            $('#xmlarea').css('background-color', '#DEDEDE');
            $scope.truefalse = true;
            var xmlcon = $scope.xmlcontent;
            ObjectService.saveTextarea(obj, xmlcon);
            var elem = document.getElementById("editbtn");/* Changing the text of the button and hiding save button */
            elem.value = "Add Comment"
            $("#saveBtn").hide();
        }
    }




})();
