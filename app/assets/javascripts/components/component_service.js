app.factory('componentService', ["_", "Restangular", "$http",
function(_, Restangular, $http){
  var componentService = {};
  var _id = 1;
  var componentTypes;
  $http.get('components.json')
    .then(function(data){
      componentTypes = data.data;
      console.log(componentTypes);
    })
    .catch(function(reason){
      console.log(reason);
    });

  componentService.buildComponent = function(componentType){
    var component = angular.copy(componentTypes[componentType], {});
    component.id = _id;
    _id++;
    return component;
  };

  return componentService;
}]);
