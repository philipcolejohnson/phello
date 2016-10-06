phello.service('boardService', ['Restangular', function(Restangular) {

  var bS = {};
  var _boards = [];

  bS.getBoards = function() {
    return _boards;
  };

  bS.all = function() {
    console.log("Getting boards...");
    return Restangular.all('boards').getList().then(function(response) {
      console.log("Got all boards");
      angular.copy(response, _boards);
      return _boards;
    },
    function() {
      console.log("There was an error getting the boards");
    });
  };

  bS.create = function(name) {
    console.log("Creating board...");
    Restangular.all('boards').post({
      board: {
        name: name
      }
    }).then(function() {
      bS.all();
    });
  };

  return bS;

}]);