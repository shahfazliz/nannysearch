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
    'geolocation'
  ])
  .config(function ($stateProvider, $urlRouterProvider,uiGmapGoogleMapApiProvider) {
    // $urlRouterProvider.otherwise("/");

    $stateProvider
    .state('main', {
      url: "/",
      templateUrl: "views/main.html",
      controller: 'MainCtrl'
    })
    .state('state1', {
      url: "/state1",
      templateUrl: "views/about.html",
      controller: 'AboutCtrl'
    });

    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
    });
  });
