/* jshint devel:true */

'use strict';

angular.module('tmApp', ['ui.router'])
.controller('navCtrl', ['$scope', '$location', function($scope, $location) {
  $scope.items = [
    {
      path: '/home', 
      title: 'Home',
      icon: 'home'
    },
    {
      path: '/about', 
      title: 'About',
      icon: 'user'
    },
    {
      path: '/resume', 
      title: 'Résumé', 
      icon: 'profile'
    }
  ];
  $scope.isActive = function(item) {
    if (item.path == $location.path()) {
      return true;
    }
    return false;
  };
}])
.controller('resumeCtrl', ['$scope', function($scope){

  $scope.resumeHighlight = false;

  $scope.plainTextVersion = function () {
    $scope.resumeHighlight = false;
  };

  $scope.highlightedVersion = function () {
    $scope.resumeHighlight = true;
  };

  $scope.printResume = function() {
    var printContents = document.getElementById('js-resume').innerHTML;
    var popupWin = window.open('', '_blank');
    popupWin.document.open();
    popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="/bower_components/normalize.css/normalize.css" /><link rel="stylesheet" type="text/css" href="styles/main.css" /><script src="//use.typekit.net/bbr5dap.js"></script><script>try{Typekit.load();}catch(e){}</script></head><body onload="window.print()" style="background: white;">' + printContents + '</html>');
    popupWin.document.close();
  };
      
}])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /home
  $urlRouterProvider.otherwise('/home');
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'partials/home.html'
    })
    .state('resume', {
      url: '/resume',
      controller: 'resumeCtrl',
      templateUrl: 'partials/resume.html'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'partials/about.html'
    });
}]);