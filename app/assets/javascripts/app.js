var app = angular.module('testApp',['restangular']);

app.factory('_', ['$window', function($window){
  return $window._;
}]);
