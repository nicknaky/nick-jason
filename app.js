var app = angular.module("myApp", []);

app.directive("searchInput", function() {
  return {
    templateUrl: 'AutoCompleteInput.html'
  };
});

app.controller("MainCtrl", ["$scope", function($scope) {
  $scope.test = "Angular Works!";
}]);
