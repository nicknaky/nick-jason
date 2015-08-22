var app = angular.module("myApp", []);

app.directive("searchInput", function() {
  return {
    scope: {
      var1: "=template-url",
      var2: "=input-data"
    }
    templateUrl: 'AutoCompleteInput.html'
  };
});

app.controller("MainCtrl", ["$scope", function($scope) {
  $scope.test = "Angular Works!";
}]);
