'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the workspaceApp
 */
angular.module('nannyApp')
  .controller('MainCtrl', function ($scope,uiGmapGoogleMapApi,geolocation) {
    // uiGmapGoogleMapApi.then(function(maps) {
    // 	console.log(maps);
    // });
  	$scope.map = { center: {latitude:3.1339501, longitude:101.7324398}, zoom: 16 };
  	// uiGmapGoogleMapApi.then(function(maps) {

   //  });
  	geolocation.getLocation().then(function(data){
      		// $scope.map = { center: {latitude: data.coords.latitiude, longitude:data.coords.longitude}, zoom: 19};
      		console.log(data);
      	});
  });
