'use strict';

/**
 * @ngdoc overview
 * @name repoMaticApp
 * @description
 * # repoMaticApp
 *
 * Main module of the application.
 */
angular
  .module('repoMaticApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
