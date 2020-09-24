(function () {
    //  'use strict';

    angular
        .module('myApp')
    .service('RetriveTicketService', ['$rootScope', '$http', function ($rootScope, $http) {

        return {

            getTicket: function (wo_id) {

                console.log("Ticket list");
                var url = window.location.protocol + "//" + window.location.hostname + ":93/api/Message/getTicket/" +wo_id;

                console.log(url);
                var req = {
                    method: 'GET',
                    url: url
                }


                console.log("making api call url for Ticket");
                
                return $http(req);
            }

      

        }




        }])


  


})();