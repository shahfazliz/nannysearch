'use strict';
/*
    author: jebat
    version: 1.0
    last updated: 05/08/2015
*/
angular.module('nannyApp')
    .factory('numberGenerator', function(){
        var thisFactory = {};
        var min = 1000;
        var max = 9999;
        
        // private function
        function randomNumber(min, max){
            return Math.floor(Math.random()*(max+1-min)+min);
        }
        
        thisFactory.generatedKey = randomNumber(min, max);
        
        thisFactory.testKey = function(key){
            if(key == thisFactory.generatedKey) return true;
            else return false;
        }
        
        thisFactory.resetKey = function(){
            thisFactory.generatedKey = randomNumber(min, max);
        }
        
        return thisFactory;
    });