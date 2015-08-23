var app = angular.module("myApp", []);



app.controller("MainCtrl", ["$scope", function($scope) {

  $scope.API = "AIzaSyAfxptdFcXScMEnAJhk-VNpRxr_ksPos8o";

  $scope.test = "Angular Works!";
  $scope.suggestions = ["hi", "say", "bye"];
  $scope.dataList = ["air", "airplace", "alligator", "alaze", "away", "airbnb", "aaa", "aahh", "azole"];
  $scope.googlePlaces = true;

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



      //loading google scripts
      var googleScript = document.createElement("script"); 
      var autocomplete;
      googleScript.src = "https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=places&callback=isNaN";     
      console.log("googleScript.src: " + googleScript.src);
      var body = document.getElementsByTagName("body")[0];
      body.appendChild(googleScript);


      googleScript.onload = function() {
      console.log("Loading google script"); 
        //http://stackoverflow.com/questions/8578617/inject-a-script-tag-with-remote-src-and-wait-for-it-to-execute
          googleScript.onload = null; //check link above on why we set to null
          autocomplete = new google.maps.places.Autocomplete(
            (document.getElementById('autocomplete')),
            { types: ['geocode'] });
          google.maps.event.addListener(autocomplete, 'place_changed', function() {});
      };
      

      scope.query = function(input) {

        if (scope.placesMode===false) {

          // console.log("scope.query is running");
          // console.log("scope.inputData: " + scope.inputData);
          // console.log("input: " + input);
          // console.log("googlePlaces: "+ scope.placesMode);
          
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
        } else if(scope.placesMode===true) {
          console.log("scope.placesMode is currently running: " + scope.placesMode);
         

        }




      };
    }
  };
});


