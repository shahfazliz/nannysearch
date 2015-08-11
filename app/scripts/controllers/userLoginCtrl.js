'use sctrict';
angular.module('nannyApp')
    .controller('userLoginCtrl',['$scope','$state','userModel',function($scope,$state,userModel){
        var userLogin = this;
        
        userLogin.submit = function(){
            alert(userLogin.email);
            userModel.loginUser({
                email       : userLogin.email,
                password    : userLogin.password
            },function(){
                $state.go('main');
            });
        };
    }]);