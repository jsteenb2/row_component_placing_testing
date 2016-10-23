app.controller('sideBarCtrl', ["$scope", "rowService", "$rootScope", function($scope, rowService, $rootScope){

  $scope.selectedRow = false;
  $scope.selectedComponent = false;

  $scope.initiateComponents = function(type){
    rowService.buildNewComponent(type, $scope.selectedRow);
  };

  $scope.rows = function(){
    var rows = rowService.getRows();
    return rows;
  };

  $rootScope.$on('selected.row', function(ev, id){
    if($scope.selectedRow === id){
      $scope.selectedRow = false;
    } else {
      $scope.selectedRow = id;
    }
  });

  $scope.arrowListener = function($event){
     console.log('in press event');
     if (window.event.keyCode == 37){
       // left arrow
       console.log("left arrow");
     } else if (window.event.keyCode == 39){
       // right arrow
       console.log("right arrow");
     } else if (window.event.keyCode == 40){
       // down arrow
       console.log("down arrow");
     } else if (window.event.keyCode == 38){
       // up arrow
       console.log("up arrow");
     }
 };
}]);
