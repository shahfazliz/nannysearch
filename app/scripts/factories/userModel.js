'use strict';

angular.module('nannyApp').factory('userModel',['$http', function($http){

	return {
		generateActivationCode : function(){
			console.log('generate Activation Code');
		},

		sendTwillioSms : function(to, msg){
			$http({
				method:     'POST',
		        url:        'https://api.twilio.com/2010-04-01/Accounts/AC6659e644be085e375752a51422018eef/Messages.json',
		        headers:{   'Authorization': 'Basic ' + btoa('AC6659e644be085e375752a51422018eef:7f0d9b9ddaa6ee68318efee2f4a229d2'),
		        			'Content-Type': 'application/x-www-form-urlencoded'
		    	},
		        transformRequest: function(obj) {
			        var str = [];
			        for(var p in obj)
			        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
			        return str.join("&");
			    },
		        data: {
		            'To':     '+60163064256',
		            'From':   '+14155992671',
		            'Body':   'test'
		        }
		    })
		    .success(function(data){
		    	console.log(data);
		    	console.log('Activation Send!');
		    })
		    .error(function(data){
		    	console.log(data);
		    	console.log('Activation Fail to Send!');
		    })
			console.log('send twillio sms');
		}
	}
}]);