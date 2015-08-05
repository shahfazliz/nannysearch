'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the workspaceApp
 */
angular.module('nannyApp')
    .controller('nannyProfileCtrl', ['$scope','$stateParams','userModel', function($scope,$stateParams,userModel){
        var nannyProfile = this;
    
        nannyProfile.form           = userModel.init($stateParams.id);
        // nannyProfile.form.mobile    = userModel.mobile;
        // nannyProfile.form.email     = userModel.email;
        
        // create submit function
        // save to userModel and firebase
        // create login and authentication
        // cleanup navigation
        
        nannyProfile.submit = function(){
            userModel.mobile            = nannyProfile.form.mobile;
            userModel.email             = nannyProfile.form.email;
            userModel.name              = nannyProfile.form.name;
            userModel.age               = nannyProfile.form.age;
            userModel.gender            = nannyProfile.form.gender;
            userModel.race              = nannyProfile.form.race;
            userModel.address           = nannyProfile.form.address;
            userModel.minAge            = nannyProfile.form.minAge;
            userModel.maxAge            = nannyProfile.form.maxAge;
            userModel.genderPreference  = nannyProfile.form.genderPreference;
            userModel.language          = nannyProfile.form.language;
            userModel.currentlyInCare   = nannyProfile.form.currentlyInCare;
            userModel.price             = nannyProfile.form.price;
            userModel.priceUnit         = nannyProfile.form.priceUnit;
            userModel.experience        = nannyProfile.form.experience;
            userModel.description       = nannyProfile.form.description;
            userModel.updateDatabase();
        };
    }]);
