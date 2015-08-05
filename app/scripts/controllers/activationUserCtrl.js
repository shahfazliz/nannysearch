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
    .controller('activationUserCtrl', ['$scope','$state','userModel','numberGenerator', function ($scope,$state,userModel,numberGenerator) {
        var activationUser = this;
        
        activationUser.id       = userModel.id;
  	    activationUser.email    = userModel.email;
  	    activationUser.number   = userModel.number;
  	    
  		activationUser.submit = function(){
  		    if(numberGenerator.testKey(activationUser.form.code)){
  		        // set fairebase user true
  		        // reroute to nanny form
  		        $state.go('profile');
            }
            else{
  		        alert('Sorry, wrong activation key');
  		    }
  		}
    }]);  	