app.controller('sideBarCtrl', ["$scope", "rowService", "$rootScope", function($scope, rowService, $rootScope){
  var makeComps = ["toggleButton", "authorBox"];
  $scope.selectedRow = false;

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

}]);
