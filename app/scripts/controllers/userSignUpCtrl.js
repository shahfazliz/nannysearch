'use strict';
/**
 * @ngdoc function
 * @name workspaceApp.controller:userSignupCtrl
 * @description
 * # userSignUpCtrl
 * Controller of the workspaceApp
 */
angular.module('nannyApp')
    //.controller('userSignUpCtrl', ['$firebaseAuth', '$firebaseArray', '$state', 'userModel', 'gsmcommunication', 'numberGenerator', function ($firebaseAuth,$firebaseArray,$state,userModel,gsmcommunication,numberGenerator) {
    .controller('userSignUpCtrl', ['$scope','$state', 'userModel', 'gsmcommunication', 'numberGenerator', function($scope,$state,userModel,gsmcommunication,numberGenerator){
        //form needed validation, needed to add validation
        var userSignUpCtrl = this;
        // var ref = new Firebase("https://blazing-inferno-1310.firebaseio.com");
        // var usrsDb = new Firebase("https://blazing-inferno-1310.firebaseio.com/users");
    
        userSignUpCtrl.form = {};
        // userModel.generateActivationCode();
    
        userSignUpCtrl.typeChange = "password";
        userSignUpCtrl.typeChange2 = "password";
    
    
        //firebase change to profile object using child rather than $firebaseArray
        //extract signup into userModel, refactor codes
        //after register use firebase login to login
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
                        gsmcommunication.sendSMS(userSignUpCtrl.form.mobile,'Your activation code is: ' + numberGenerator.generatedKey);
                        $state.go('activate', {'id':ref.key()});
                    });
                    break;
                case false:
                    alert('Password not the same');
                    break;  
            }
        };
    
        //  userSignUpCtrl.submit = function(){
        //     console.log(userSignUpCtrl.form);
        //     if(userSignUpCtrl.form.password === userSignUpCtrl.form.password2){
        //         ref.createUser({
        //               email    : userSignUpCtrl.form.email,
        //               password : userSignUpCtrl.form.password
        //             }, function(error, userData) {
        //               if (error) {
        //                 console.log("Error creating user:", error);
        //               } else {
        //                 console.log("Successfully created user account with uid:", ref.key());
        //                 var usrs = $firebaseArray(usrsDb);
        //                 usrs.$add({
        //                   userId: userData.uid,  
        //                   userEmail: userSignUpCtrl.form.email,
        //                   userPhone: userSignUpCtrl.form.mobile,
        //                   userActive: 0
        //                 }).then(function(ref){
        //                     gsmcommunication.sendSMS(userSignUpCtrl.form.mobile,'Your activation code is: ' + numberGenerator.generatedKey);
        //                     $state.go('activate',{'id':ref.key(),'email':userSignUpCtrl.form.email,'number':userSignUpCtrl.form.mobile});
        //                     console.log('success',ref.key());
        //                 },function(err){
        //                     console.log('error',err);
        //                 });
        //               }
        //             });
        //     }else{
        //         alert('Password not the same');
        //     }
            
        //  }
    
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