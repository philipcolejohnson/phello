phello.service('boardService', boardService);

boardService.$inject = ['Restangular', '_', '$state'];

function boardService(Restangular, _, $state) {

  var bS = {};
  var _boards = [];

  bS.getBoards = function() {
    return _boards;
  };

  bS.all = function() {
    // console.log("Getting boards...");
    return Restangular.all('boards').getList().then(function(response) {
      // console.log("Got all boards");
      angular.copy(response, _boards);
      return _boards;
    },
    function() {
      console.log("There was an error getting the boards");
    });
  };

  bS.create = function(name) {
    // console.log("Creating board...");
    Restangular.all('boards').post({
      board: {
        name: name
      }
    }).then(function(response) {
      _boards.push(response);
    });
  };

  bS.delete = function(board) {
    board.remove().then(function() {
      _boards = _.pull(_boards, board);
      $state.go('dashboard');
    });
  };

  bS.find = function(id) {
    id = parseInt(id);

    return _.find(_boards, function(el) {
      return el.id === id;
    });
  };

  bS.update = function(board) {
    return board.patch({ board: board });
  };

  bS.goTo = function(boardId) {
    $state.go('boards.show', { id: boardId });
  };

  return bS;

}