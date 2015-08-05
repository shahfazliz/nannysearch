'use strict';
/*
    author: jebat, izzad
    version: 1.0
    last update: 05/08/2015
*/
angular.module('nannyApp')
    .factory('gsmcommunication',['$http', function($http){
        var thisFactory = {};
        
    	function sendTwillioSms(to, msg){
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
                	console.log('twillio urlencode:',str.join("&"));
                    return str.join("&");
                },
                data: {
                    'To':     to,
                    'From':   '+14155992671',
                    'Body':   msg
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
    	
    	// Maybe next time when we change from twillio, we dont need to change
    	// all other parts of the app. sendSMS is more generic
    	thisFactory.sendSMS = sendTwillioSms;
    	
    	return thisFactory;
    }]);