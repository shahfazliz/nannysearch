'use strict';
/**
 * @ngdoc function
 * @name workspaceApp.controller:userSignupCtrl
 * @description
 * # userSignUpCtrl
 * Controller of the workspaceApp
 */
angular.module('nannyApp')
    .controller('userSignUpCtrl', ['$scope','$state', 'userModel', 'gsmcommunication', 'numberGenerator', '$rootScope', '$cookies', function($scope,$state,userModel,gsmcommunication,numberGenerator,$rootScope, $cookies){
        //form needed validation, needed to add validation
        var userSignUpCtrl = this;
        userSignUpCtrl.form = {};
        
        userSignUpCtrl.typeChange = "password";
        userSignUpCtrl.typeChange2 = "password";
    
    
        //firebase change to profile object using child rather than $firebaseArray
        //after register succesfully, create rootScope global user, for use login and logout or session
        
        userSignUpCtrl.submit = function(){
            var userParams = {
                email   : userSignUpCtrl.form.email,
                password: userSignUpCtrl.form.password,
                mobile  : userSignUpCtrl.form.mobile
            }
            
            switch(userSignUpCtrl.form.password === userSignUpCtrl.form.password2){
                case true:
                    userModel.createUser(userParams, function(ref){
                        // gsmcommunication.sendSMS(userSignUpCtrl.form.mobile,'Your activation code is: ' + numberGenerator.generatedKey);
                        console.log('create user ref',ref);
                        userModel.loginUser(userParams, function(uid){
                            // console.log('go to activate',uid);
                            var usrLoggedIn = {
                                'uid '    : uid,
                                'email'   : userSignUpCtrl.form.email,
                                'mobile'  : userSignUpCtrl.form.mobile
                            };

                            $rootScope.global = usrLoggedIn;
                            $cookies.putObject('user',usrLoggedIn);
                            gsmcommunication.sendSMS(userSignUpCtrl.form.mobile,'Your activation code is: ' + numberGenerator.generatedKey);
                            $state.go('activate', {'id':ref, 'mobile': userSignUpCtrl.form.mobile});
                        });
                        
                    });
                    break;
                case false:
                    alert('Password not the same');
                    break;  
            }
        };
        
        //need to refactor code to be more consice. Currently just does the job.
        userSignUpCtrl.clickChange = function(value){
            console.log(value);
            switch(value){
                case 'showPass1':
                    if(userSignUpCtrl.showPass1){
                        userSignUpCtrl.typeChange = "text";
                    }else{
                        userSignUpCtrl.typeChange = "password";
                    }
                    break;
                case 'showPass2':
                    if(userSignUpCtrl.showPass2){
                        userSignUpCtrl.typeChange2 = "text";
                    }else{
                        userSignUpCtrl.typeChange2 = "password";
                    }
                    break;    
            }
        }
    }]);