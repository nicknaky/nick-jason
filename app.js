var app = angular.module("myApp", []);



app.controller("MainCtrl", ["$scope", function($scope) {

  $scope.API = "aklwjgt35j091";

  $scope.test = "Angular Works!";
  $scope.suggestions = ["hi", "say", "bye"];


}]);

app.directive("searchInput", function() {
  return {
    scope: {
      placesMode: "=googlePlaces",
      apiKey: "@"
    },
    templateUrl: 'AutoCompleteInput.html',
    link: function(scope) {

    }
  };
});
