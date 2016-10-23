app.directive('component', ['$compile', "$rootScope", "$window", function($compile, $rootScope, $window) {

  return {
    restrict: "E",
    scope: {
      component: "="
    },
    link: function(scope, element, attrs){
      scope.hovered = false;
      scope.doubleClicked = false;
      var template = angular.element(scope.component.content);
      var linkFn = $compile(template);
      var content = linkFn(scope);
      element.append(content);

      scope.onClick = function($event){
        $event.stopPropagation();
        scope.hovered = !scope.hovered;
        element.find('[data-head="head"]')
          .addClass('hovered');
        $rootScope.$emit('selected.component', scope.component.id);
      };

      scope.dblClick = function($event){
        $event.stopPropagation();
        var $ele = angular.element($event.target);
        if(scope.doubleClicked){
          $ele.removeClass('hovered');
        } else {
          $ele.addClass('hovered');
        }
        scope.doubleClicked = !scope.doubleClicked;
      };

      $rootScope.$on('selected.component', function(ev, id){
        if (scope.component.id !== id){
          scope.hovered = false;
        }
      });


    //   scope.arrowListener = function(){
    //      console.log('in press event');
    //      if (window.event.keyCode == 37){
    //        // left arrow
    //        console.log("left arrow");
    //      } else if (window.event.keyCode == 39){
    //        // right arrow
    //        console.log("right arrow");
    //      } else if (window.event.keyCode == 40){
    //        // down arrow
    //        console.log("down arrow");
    //      } else if (window.event.keyCode == 38){
    //        // up arrow
    //        console.log("up arrow");
    //      }
    //  }
    }
  };
}]);
