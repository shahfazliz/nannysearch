'use strict';
angular.module('nannyApp')
.controller('userLoginCtrl',['$scope','$rootScope','$cookies','$state','userModel',function($scope,$rootScope,$cookies,$state,userModel){
    $scope.userLogin = this;
    
    $scope.userLogin.submit = function(){
        userModel.loginUser({
            email       : $scope.userLogin.email,
            password    : $scope.userLogin.password
        },function(id){
            var usrLoggedIn = {
                'uid '    : id,
                'email'   : $scope.userLogin.email
            };
            
            $rootScope.isLoggedIn = true;
            $rootScope.global = usrLoggedIn;
            $cookies.putObject('user',usrLoggedIn);
            
            $state.go('profile',{'id':id});
        });
    };
}]);