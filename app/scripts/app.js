'use strict';

angular
  .module('matdiskApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAnimate'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/result', {
        templateUrl: 'views/hasil.html',
        controller: 'ResultCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });