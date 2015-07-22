'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the workspaceApp
 */
angular.module('nannyApp')
  .controller('MainCtrl', function ($scope,uiGmapGoogleMapApi,getCurrentLocation) {
    // uiGmapGoogleMapApi.then(function(maps) {
    // 	console.log(maps);
    // });
  	$scope.map = { center: {latitude:getCurrentLocation.coords.latitude, longitude:getCurrentLocation.coords.longitude}, zoom: 16 };
 	 
  });
