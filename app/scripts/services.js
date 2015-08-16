'use strict';

angular.module('wwwApp')
  .factory('ChangelogService', ['$resource', 'ENV', function($resource, ENV) {
    return {
      addChangelog: function(populate) {
        var url = ENV.apiEndpoint + '/addChangelog';
        return $resource(url).save(populate).$promise;
      },

      getUserChangelog: function(email) {
        var url = ENV.apiEndpoint + '/getChangelog';
        return $resource(url).get({user_email:email}).$promise;
      },
    }
  }])


  