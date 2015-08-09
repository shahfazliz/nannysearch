'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:activationUserCtrl
 * @description
 * # activationUserCtrl
 * Controller of the workspaceApp
 */
angular.module('nannyApp')
    // Added 'numberGenerator' from Factory
    .controller('activationUserCtrl', ['$scope','$state','$stateParams','userModel','numberGenerator', function ($scope,$state,$stateParams,userModel,numberGenerator) {
        var activationUser = this;
        
        activationUser.email    = userModel.email;
  	    activationUser.number   = userModel.number;
        activationUser.mobile = $stateParams.mobile;
  	    
  		activationUser.submit = function(){
  		    switch(numberGenerator.testKey(activationUser.form.code)){
  		        case true:
  		            // set fairebase user true
  		            // reroute to nanny form
  		            $state.go('profile', {'id':$stateParams.id});
  		            break;
                case false:
                    alert('Sorry, wrong activation key');
                    break;
  		    }
  		}
    }]);  	