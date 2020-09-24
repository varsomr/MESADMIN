// Code goes here

var app = angular.module('plunker', ['angular-flexslider']);

app.controller('MainCtrl', function($scope) {
  $scope.prod = {imagePaths: []};
	$scope.prod.imagePaths = [
      	{ custom: 'FIN.JPG', thumbnail: 'FIN.JPG' },
      	{ custom: 'OVR.JPG', thumbnail: 'OVR.JPG' },
      	{ custom: 'TST.JPG', thumbnail: 'TST.JPG' },
      	{ custom: 'BA.JPG', thumbnail: 'BA.JPG' },
      
      ];
});