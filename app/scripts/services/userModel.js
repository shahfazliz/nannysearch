'use strict';
/*
	author: jebat, izzad
	version: 1.0
	last update: 05/08/2015
*/
angular.module('nannyApp')
	.service('userModel',	['$firebaseAuth', '$firebaseArray','$rootScope', function($firebaseAuth, $firebaseArray,$rootScope){
		
		// userModel object's value parameters
		this.id					= '';
		this.uid				= '';
		this.mobile				= '';
		this.email				= '';
		this.name				= '';
		this.age				= '';
		this.gender				= '';
		this.race				= '';
		this.address			= '';
		this.minAge				= '';
		this.maxAge				= '';
		this.genderPreference	= '';
		this.language			= '';
		this.currentlyInCare	= '';
		this.price				= '';
		this.priceUnit			= '';
		this.experience			= '';
		this.description		= '';
		
		var firebaseUrl = "https://blazing-inferno-1310.firebaseio.com";
		var ref 	= new Firebase(firebaseUrl);
        var usrsDb 	= new Firebase(firebaseUrl + "/users");
        var user	= null;
        
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
						uid			: userData.uid,  
						email		: array.email,
						mobile		: array.mobile,
						userActive	: 0
					}).then(function(ref){
						callback(ref);	
					},function(err){
						console.log('error',err);
					});
				}
			});
		};

		this.loginUser = function(email,password,callback){
			var thisParent = this;

			ref.authWithPassword({
			  email    : email,
			  password : password
			}, function(error, authData) {
			  if (error) {
			    console.log("Login Failed!", error);
			  } else {
			    $rootScope.global.user = {
			    	'user'	: thisParent.email,
			    	'mobile': thisParent.mobile,
			    	'uid'	: thisParent.uid

			    };
			    console.log("Authenticated successfully with payload:", authData);
			    console.log("rootScope.global", $rootScope.global);
			  }
			});
		};
       
		this.updateDatabase = function(callback){
			if(user == null) user = new Firebase(firebaseUrl+'/users/'+this.id);
			
			user.update({
				'mobile'			: this.mobile,
				'email'				: this.email,
				'name'				: this.name,
				'age'				: this.age,
				'gender'			: this.gender,
				'race'				: this.race,
				'address'			: this.address,
				'minAge'			: this.minAge,
				'maxAge'			: this.maxAge,
				'genderPreference'	: this.genderPreference,
				'language'			: this.language,
				'currentlyInCare'	: this.currentlyInCare,
				'price'				: this.price,
				'priceUnit'			: this.priceUnit,
				'experience'		: this.experience,
				'description'		: this.description
			}, function(error){
				if(error) console.log('error', error);
				else{
					callback();
				}
			});
		};
	}]);