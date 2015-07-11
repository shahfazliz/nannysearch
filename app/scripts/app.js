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
    'ngTouch'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
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
  });
