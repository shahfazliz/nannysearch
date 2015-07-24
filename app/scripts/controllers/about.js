'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the workspaceApp
 */
angular.module('nannyApp')
  .controller('RegisterNannyCtrl', function () {
     var registerNannyCtrl = this;

     registerNannyCtrl.form = {};
     registerNannyCtrl.form.race = 'malay';
     registerNannyCtrl.form.gender = 'female';
     registerNannyCtrl.form.genderPreference = 'boy';
     registerNannyCtrl.form.agePreference = "1";

     registerNannyCtrl.submit = function(){
     	console.log('RegisterNannyForm',registerNannyCtrl.form);
     };

  });
