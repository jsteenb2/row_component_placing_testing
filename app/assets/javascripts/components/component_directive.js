app.directive('component', ['$compile', function($compile) {

    var onKeyPress = function(event){
     if (window.event.keyCode == 37 ){
       // left arrow
       console.log("left arrow");
     } else if (window.event.keyCode == 39 ){
       // right arrow
       console.log("right arrow");
     } else if (window.event.keyCode == 40 ){
       // down arrow
       console.log("down arrow");
     } else if (window.event.keyCode == 38 ){
       // up arrow
       console.log("up arrow");
     }
   };

  return {
    restrict: "E",
    scope: {
      component: "="
    },
    link: function(scope, element, attrs){
      var template = scope.component.content;
      var linkFn = $compile(template);
      var content = linkFn(scope);
      element.html(content);

      scope.onClick = function($event){
        $event.stopPropagation();
        angular.element($event.target)
          .addClass('hovered');
      };
    }
  };
}]);
