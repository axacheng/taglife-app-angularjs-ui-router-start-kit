'use strict';

/**
 * @ngdoc function
 * @name wwwApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wwwApp
 */
angular.module('wwwApp')
  .controller('HomeCtrl', function ($rootScope, $scope, $state, ChangelogService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })

  .controller('ToolCtrl', function ($rootScope, $scope, $state, ChangelogService) {
    $scope.myName = 'axa';
    ChangelogService.getUserChangelog().then(function(idea_result) {
    	console.log(idea_result)
    })
  })

;
