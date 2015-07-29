'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:userSignupCtrl
 * @description
 * # userSignUpCtrl
 * Controller of the workspaceApp
 */
angular.module('nannyApp')
  .controller('userSignUpCtrl', function () {
    //form needed validation, needed to add validation
     var userSignUpCtrl = this;

     userSignUpCtrl.form = {};

     userSignUpCtrl.typeChange = "password";
     userSignUpCtrl.typeChange2 = "password";

     userSignUpCtrl.submit = function(){
        console.log(userSignUpCtrl.form);
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
  });