app.factory('rowService', ["_", "Restangular", "componentService", function(_, Restangular, componentService){
  var rowService = {};
  var _rows = [];
  var _id = 1;

  rowService.getRows = function(){
    return _rows;
  };

  var _activateComponent = function(componentType, index, array){
    return componentService.buildComponent(componentType);
  };

  rowService.rebuildComponents = function(compArray){
    compArray.forEach(_activateComponent);
  };

  rowService.buildNewComponent = function(componentType, rowId){
    var component = _activateComponent(componentType);
    if (rowId) {
      _addComponentToExistingRow(component, rowId);
    } else {
      _makeNewRow(component);
    }
  };

  var _addComponentToExistingRow = function(component, rowId){
    var curRow = _.find(_rows, function(row){
      return row.id === rowId;
    });
    curRow.components.push(component);
  };

  var _makeNewRow = function(component){
    var newRow = {
      id: _id,
      components: []
    };
    newRow.components.push(component);
    _rows.push(newRow);
    _id++;
  };

  return rowService;
}]);
