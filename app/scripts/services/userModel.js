'use strict';
/*
	author: jebat, izzad
	version: 1.0
	last update: 05/08/2015
*/
angular.module('nannyApp')
	.service('userModel',	['$firebaseAuth', '$firebaseArray','$rootScope', function($firebaseAuth, $firebaseArray,$rootScope){
		var self = this;
		// userModel object's value parameters
		self.id					= '';
		self.uid				= '';
		self.mobile				= '';
		self.email				= '';
		self.name				= '';
		self.age				= '';
		self.gender				= '';
		self.race				= '';
		self.address			= '';
		self.minAge				= '';
		self.maxAge				= '';
		self.genderPreference	= '';
		self.language			= '';
		self.currentlyInCare	= '';
		self.price				= '';
		self.priceUnit			= '';
		self.experience			= '';
		self.description		= '';
		
		var firebaseUrl = "https://blazing-inferno-1310.firebaseio.com";
		var ref 	= new Firebase(firebaseUrl);
        var usrsDb 	= new Firebase(firebaseUrl + "/users");
        var user	= null;

        self.loginUser = function(obj,callback){
			// var thisParent = this;

			console.log('login user method', obj);
			ref.authWithPassword({
			  email    : obj.email,
			  password : obj.password
			},function(error,authData){
				if(error)
				{
					console.log(error);
				}
				else
				{
					var str = authData.uid;
					var uid = str.substring(str.lastIndexOf(":")+1);	
					callback(uid);
				}
			});
			// r password : password
			// }ef.authWithPassword({
			//   email    : email,
			//  , function(error, authData) {
			//   if (error) {
			//     console.log("Login Failed!", error);
			//   } else {
			//     $rootScope.global.user = {
			//     	'user'	: thisParent.email,
			//     	'mobile': thisParent.mobile,
			//     	'uid'	: thisParent.uid

			//     };
			//     console.log("Authenticated successfully with payload:", authData);
			//     console.log("rootScope.global", $rootScope.global);
			//   }
			// });
		};
        
        self.createUser = function(array, callback){
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
					self.uid 		= userData.uid;
					self.mobile 	= array.mobile;	
					self.email	    = array.email;
					
					var usrs = $firebaseArray(usrsDb);
					usrs.$add({
						uid			: userData.uid,  
						email		: array.email,
						mobile		: array.mobile,
						userActive	: 0
					}).then(function(ref){
						callback(ref.key());
					},function(err){
						console.log('error',err);
					});
				}
			});
		};
       
		self.updateDatabase = function(callback){
			if(user == null) user = new Firebase(firebaseUrl+'/users/'+self.id);
			
			user.update({
				'mobile'			: self.mobile,
				'email'				: self.email,
				'name'				: self.name,
				'age'				: self.age,
				'gender'			: self.gender,
				'race'				: self.race,
				'address'			: self.address,
				'minAge'			: self.minAge,
				'maxAge'			: self.maxAge,
				'genderPreference'	: self.genderPreference,
				'language'			: self.language,
				'currentlyInCare'	: self.currentlyInCare,
				'price'				: self.price,
				'priceUnit'			: self.priceUnit,
				'experience'		: self.experience,
				'description'		: self.description
			}, function(error){
				if(error) console.log('error', error);
				else{
					callback();
				}
			});
		};
	}]);