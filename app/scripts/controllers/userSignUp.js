'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:userSignupCtrl
 * @description
 * # userSignUpCtrl
 * Controller of the workspaceApp
 */
angular.module('nannyApp')
  .controller('userSignUpCtrl', ['$firebaseAuth', function ($firebaseAuth) {
    //form needed validation, needed to add validation
     var userSignUpCtrl = this;
     var ref = new Firebase("https://blazing-inferno-1310.firebaseio.com");

     userSignUpCtrl.form = {};

     userSignUpCtrl.typeChange = "password";
     userSignUpCtrl.typeChange2 = "password";

     userSignUpCtrl.submit = function(){
        console.log(userSignUpCtrl.form);
        if(userSignUpCtrl.form.password === userSignUpCtrl.form.password2){
            ref.createUser({
                  email    : userSignUpCtrl.form.email,
                  password : userSignUpCtrl.form.password
                }, function(error, userData) {
                  if (error) {
                    console.log("Error creating user:", error);
                  } else {
                    console.log("Successfully created user account with uid:", userData.uid);
                  }
                });
        }else{
            alert('Password not the same');
        }
        
     }

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