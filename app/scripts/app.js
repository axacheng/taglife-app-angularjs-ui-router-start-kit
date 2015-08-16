'use strict';

/**
 * @ngdoc overview
 * @name wwwApp
 * @description
 * # wwwApp
 *
 * Main module of the application.
 */
angular
  .module('wwwApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'config',
  ])

  .config(function($httpProvider, $stateProvider, $urlRouterProvider) {
    // $httpProvider.defaults.useXDomain = true;
    // delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'templates/main.html',
        controller: 'HomeCtrl',
      })

      .state('tool', {
        url: '/tool',
        templateUrl: 'templates/tool.html',
        controller: 'ToolCtrl',
      })

    $urlRouterProvider.otherwise('/');
  }) 
