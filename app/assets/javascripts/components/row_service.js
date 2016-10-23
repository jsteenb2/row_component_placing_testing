app.factory('rowService', ["_", "Restangular", "componentService", function(_, Restangular, componentService){
  var rowService = {};
  var _rows = [];
  var _id = 1;

  rowService.getRows = function(){
    return _rows;
  };

  var swapArrayElements = function(arr, indexA, indexB) {
    var temp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = temp;
  };

  var _getRows = function(){
    return _rows;
  };

  Array.prototype.swap = function(indexA, indexB) {
     swapArrayElements(this, indexA, indexB);
  };

  var _activateComponent = function(componentType, index, array){
    var component = componentService.buildComponent(componentType);
    return component;
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
    _extendComponent(component);
  };

  var _extendComponent = function(component){
    component.moveLeft = _moveLeft;
    component.moveRight = _moveRight;
    component.moveUp = _moveUp;
    component.moveDown = _moveDown;
  };

  var _findRowIdx = function(rowId){
    return _rows.map(function(row) {
      return row.id;
    }).indexOf(rowId);
  };

  var _findComponentIdx = function(component, rowIdx){
    var components = _rows[rowIdx].components;
    return components.map(function(comp){
      return comp.id;
    }).indexOf(component.id);
  };

  var _moveUp = function(){
    var rowIdx = _findRowIdx(this.rowId);
    var compIdx = _findComponentIdx(this, rowIdx);
    if(rowIdx > 0){
      var comp = _rows[rowIdx].components.splice(compIdx, 1)[0];
      _addToRow(comp, rowIdx - 1);
    }
  };

  var _moveDown = function(){
    var rowIdx = _findRowIdx(this.rowId);
    var compIdx = _findComponentIdx(this, rowIdx);
    if(rowIdx < _rows.length &&
       _rows[rowIdx].components.length > 1){
         var comp = _rows[rowIdx].components.splice(compIdx, 1);
         _addToRow(comp, rowIdx + 1);
    }
  };

  var _addToRow = function(component, newRowIdx){
    if (_rows[newRowIdx]){
      component.rowId = newRowIdx;
      _rows[newRowIdx].components.push(component);
    } else {
      _makeNewRow(component);
    }
  };

  var _moveLeft = function(){
    var rowIdx = _findRowIdx(this.rowId);
    var compIdx = _findComponentIdx(this, rowIdx);
    var that = this;
    if(compIdx > 0){
      _rows[rowIdx].components.swap( compIdx - 1, compIdx );
    }
    console.log(that);
    console.log(this);
  };

  var _moveRight = function(){
    var rowIdx = _findRowIdx(this.rowId);
    var compIdx = _findComponentIdx(this, rowIdx);
    if(compIdx < (_rows[rowIdx].components.length - 1) ){
      console.log('in the downer');
      _rows[rowIdx].components.swap( compIdx + 1, compIdx );
    }
  };

  var _addComponentToExistingRow = function(component, rowId){
    var curRow = _.find(_rows, function(row){
      return row.id === rowId;
    });
    component.rowId = rowId;
    curRow.components.push(component);
  };

  var _makeNewRow = function(component){
    var newRow = {
      id: _id,
      components: []
    };
    component.rowId = _id;
    newRow.components.push(component);
    _rows.push(newRow);
    _id++;
  };

  return rowService;
}]);
