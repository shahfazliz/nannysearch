'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:activationUserCtrl
 * @description
 * # activationUserCtrl
 * Controller of the workspaceApp
 */
angular.module('nannyApp')
  .controller('activationUserCtrl', ['$scope','$stateParams', function ($scope,$stateParams) {
  	    var activationUser = this;

  	    activationUser.email = $stateParams.email;
  	    activationUser.number = $stateParams.number;
  		console.log('Activation argument',$stateParams);
}]);  	