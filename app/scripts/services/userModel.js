'use strict';
/*
	author: jebat, izzad
	version: 1.0
	last update: 05/08/2015
*/
angular.module('nannyApp')
	.service('userModel',	['$firebaseAuth', '$firebaseArray','$rootScope', function($firebaseAuth, $firebaseArray,$rootScope){
		this.uid;
		this.mobile;
		this.email;
		
		var ref 	= new Firebase("https://blazing-inferno-1310.firebaseio.com");
        var usrsDb 	= new Firebase("https://blazing-inferno-1310.firebaseio.com/users");
        
        this.createUser = function(array, callback){
        	var thisParent = this;
        	ref.createUser({
					email    : array.email,
					password : array.password
				}, 
				function(error, userData){
					if(error){
                        console.log("Error creating user:", error);
					}
					else{
						console.log("Successfully created user account with uid:", userData.uid);
						thisParent.uid 		= userData.uid;
						thisParent.mobile 	= array.mobile;	
						thisParent.email	= array.email;
						
						var usrs = $firebaseArray(usrsDb);
						usrs.$add({
							userId: 	userData.uid,  
							userEmail: 	array.email,
							userMobile: array.mobile,
							userActive: 0
						}).then(function(ref){
							callback(ref);	
						},function(err){
							console.log('error',err);
						});
					}
				});
		}


		this.loginUser = function(email,password,callback){
			ref.authWithPassword({
			  email    : email,
			  password : password
			}, function(error, authData) {
			  if (error) {
			    console.log("Login Failed!", error);
			  } else {
			    $rootScope.global.user = {
			    	'user': email
			    }
			    console.log("Authenticated successfully with payload:", authData);
			    console.log("rootScope.global", $rootScope.global);
			  }
			});
		}
        
        this.name;
		this.age;
		this.gender;
		this.race;
		this.address;
		this.minAge;
		this.maxAge;
		this.genderPreference;
		this.language;
		this.currentlyInCare;
		this.price;
		this.experience;
		this.description;
	}]);