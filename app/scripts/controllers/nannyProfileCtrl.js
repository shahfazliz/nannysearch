'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the workspaceApp
 */
angular.module('nannyApp')
    .controller('nannyProfileCtrl', ['$http','$scope','$state','$stateParams','userModel', '$rootScope', '$cookies', function($http,$scope,$state,$stateParams,userModel,$rootScope, $cookies){
        var nannyProfile = this;
        nannyProfile.form = userModel;
        console.log('rootScope',$rootScope);
        console.log($cookies.getAll());

        
        // Initialize userModel data
        $http.get('https://blazing-inferno-1310.firebaseio.com/users/' + $stateParams.id + '.json')
    	.then(function(response){
            console.log('response for get users',response);
    	    userModel.id = $stateParams.id;
    		for(var key in response.data){
    			userModel[key] = response.data[key];
    			nannyProfile.form[key] = userModel[key];
    		}
    	});
    	
    	// Bind nannyProfile.form properties to userModel
    	for(var key in nannyProfile.form){
    	    userModel[key] = nannyProfile.form[key];
    	}
        
        // Submit function with callback when sucess
        nannyProfile.submit = function(){
            userModel.updateDatabase(function(){
                alert('Profile Updated');
                $state.go('main');
            });
        };
    }]);
