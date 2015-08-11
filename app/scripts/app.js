'use strict';

/**
 * @ngdoc overview
 * @name workspaceApp
 * @description
 * # workspaceApp
 *
 * Main module of the application.
 */
angular
  .module('nannyApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'uiGmapgoogle-maps',
    'geolocation',
    'firebase',
    'ngCookies'
  ])
  .config(function ($stateProvider, $urlRouterProvider,uiGmapGoogleMapApiProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
    .state('main', {
      url: "/",
      templateUrl: "views/main.html",
      controller: 'MainCtrl',
      // using resolve to get the current position before the main page is load, then use the coordinates to show according to user vicinity.
      // need to structure the router using parents,child nested more properly later.
      resolve: {
        getCurrentLocation: function(geolocation){
          return geolocation.getLocation();
        }
      }

    })
    .state('login',{
      url:'/login',
      templateUrl:'views/login.html',
      controller:'userLoginCtrl'
    })
    .state('logout',{
      url: "/logout",
      template: " ",
      controller: "userLogoutCtrl",
      controllerAs: "userLogout"
    })
    .state('signup',{
       url: "/signup",
       templateUrl:"views/signup.html",
       controller: "userSignUpCtrl",
       controllerAs: "userSignUp"
    })
    .state('activate',{
       url: "/activate/:id",
       templateUrl:"views/activate.html",
       controller: "activationUserCtrl",
       controllerAs: "activationUser",
       params: {
         mobile: ''
       }
    })
    .state('profile', {
      url: "/profile/:id",
      templateUrl: "views/profile.html",
      controller: "nannyProfileCtrl",
      controllerAs: "nannyProfile"
    });
    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
    });
  })
  .run(['$rootScope','$cookieStore',function($rootScope,$cookieStore){
    var user = $cookieStore.get('user');
    if(user){
      alert(user);
      $rootScope.isLoggedIn = true;
    }
    else
      $rootScope.isLoggedIn = false;
  }]);
