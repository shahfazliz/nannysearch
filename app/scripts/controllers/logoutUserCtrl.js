'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:logoutUserCtrl
 * @description
 * # logoutUserCtrl
 * Controller of the workspaceApp
 */
angular.module('nannyApp')
    .controller('userLogoutCtrl', ['$cookies', '$rootScope', function($cookies,$rootScope){
        $cookies.remove('user');
        if($rootScope.global){
            delete $rootScope.global;
        }
        console.log('logoutUser',$cookies.getAll());
    }]);