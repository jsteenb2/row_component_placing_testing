app.directive('component', ['$compile', function($compile) {

  return {
    restrict: "E",
    scope: {
      component: "="
    },
    link: function(scope, element, attrs){
      scope.content = angular.element(scope.component.content);
      var template = scope.component.content;
      var linkFn = $compile(template);
      var content = linkFn(scope);
      element.html(content);
    }
  };
}]);
