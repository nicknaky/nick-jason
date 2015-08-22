var app = angular.module("myApp", []);



app.controller("MainCtrl", ["$scope", function($scope) {
  $scope.test = "Angular Works!";
  $scope.suggestions = ["hi", "say", "bye"];


}]);

app.directive("searchInput", function() {
  return {
    scope: {
      var1: "=suggestions"
    },
    templateUrl: 'AutoCompleteInput.html',
    link: function(scope) {
      scope.
    }
  };
});
