var mainApp = angular.module('mainApp', ['ui.bootstrap', 'ui.router']);



mainApp.config(['$stateProvider', '$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  // For unmatched routes
  $urlRouterProvider.otherwise('/');

  // Application routes
  $stateProvider
  .state('myList', {
    url: '/',
    templateUrl: 'templates/live_chart.html',
    controller : ""
  })
}
]);



mainApp.controller('mainCtrl', function mainCtrl($scope, $http, $interval) {

  $scope.title = "Server Monitor - Home";
  $scope.toggle = true;
  $scope.toggleSidebar = function() {
    $scope.toggle = !$scope.toggle;
  };

});


mainApp.controller('myListCtrl', function myListCtrl($scope, $http) {


});
