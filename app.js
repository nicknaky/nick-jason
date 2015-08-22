var app = angular.module("myApp", []);

app.directive("nprLink", function() {
  return {
    restrict: 'EA',
    require: ['^ngModel'],
    replace: true,
    scope: {
      ngModel: '=',
      playerDir: '=playerAttr'
    },
    templateUrl: 'views/nprListItem.html',
    link: function(scope, ele, attr) {
      scope.duration = scope.ngModel.audio[0].duration.$text;
    }
  };
});

app.controller("MainCtrl", ["$scope", function($scope) {
  $scope.test = "Angular Works!";
}]);
