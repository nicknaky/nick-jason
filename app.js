var app = angular.module("myApp", []);



app.controller("MainCtrl", ["$scope", function($scope) {

  $scope.API = "AIzaSyAfxptdFcXScMEnAJhk-VNpRxr_ksPos8o";

  $scope.test = "Angular Works!";
  $scope.suggestions = ["hi", "say", "bye"];
  $scope.dataList = ["air", "airplace", "alligator", "alaze", "away", "airbnb", "aaa", "aahh", "azole"];


}]);

app.directive("searchInput", function() {
  return {
    scope: {
      placesMode: "=googlePlaces",
      apiKey: "@",
      inputData: "="
    },
    templateUrl: 'AutoCompleteInput.html',
    link: function(scope) {
      scope.searchText = "";

      scope.query = function(input) {
        console.log("scope.query is running");
        console.log("scope.inputData: " + scope.inputData);
        console.log("input: " + input);
        var list = document.getElementById("resultsList");
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }
          for(var i=0; i<scope.inputData.length; i++) {
            if(scope.inputData[i].includes(input)) {

              var node = document.createElement("LI");
              var textNode = document.createTextNode(scope.inputData[i]);
              node.appendChild(textNode);
              list.appendChild(node);
            }
          }


      };
    }
  };
});
