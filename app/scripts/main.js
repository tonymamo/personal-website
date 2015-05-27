/* jshint devel:true */

var tmApp = angular.module('tmApp', ['ui.router']);

tmApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/state1");
  //
  // Now set up the states
  $stateProvider
    .state('state1', {
      url: "/state1",
      templateUrl: "partials/state1.html"
    })
    .state('state2', {
      url: "/state2",
      templateUrl: "partials/state2.html"
    });
});