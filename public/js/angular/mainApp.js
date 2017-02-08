var mainApp = angular.module('mainApp', ['ngRoute']);

mainApp.config(function($routeProvider){

  $routeProvider
    .when('/search',{
      templateUrl:'/doSearch'
    });

});

mainApp.controller('mainCtrl', function mainCtrl($scope, $http) {

  $scope.searchString = "";


  /* Open when someone clicks on the span element */
  $scope.openNav = function() {
      document.getElementById("myNav").style.width = "100%";
      document.getElementById("search-box").style.display = "block";
      document.getElementById("closebtn").style.display = "block";
  }

  /* Close when someone clicks on the "x" symbol inside the overlay */
  $scope.closeNav = function() {
      document.getElementById("myNav").style.width = "8%";
      document.getElementById("search-box").style.display = "none";
      document.getElementById("closebtn").style.display = "none";
  }


  $scope.doSearch = function(){
    console.log($scope.searchString);
  }

});
