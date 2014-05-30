'use strict';

angular
  .module('matdiskApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/mamam',{
        templateUrl: 'views/mamam.html',
        controller: 'ScndCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
