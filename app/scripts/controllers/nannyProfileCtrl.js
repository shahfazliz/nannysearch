'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the workspaceApp
 */
angular.module('nannyApp')
    .controller('nannyProfileCtrl', ['$scope','userModel', function($scope,userModel){
        var nannyProfile = this;
    
        nannyProfile.form = {};
        nannyProfile.form.mobile = userModel.mobile;
        nannyProfile.form.email  = userModel.email;
    
        nannyProfile.submit = function(){
             
        };
    }]);
