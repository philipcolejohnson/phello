phello.controller('BoardShowCtrl', ['$scope', 'listService', 'boardService', 'board', 'boards', 'lists', function($scope, listService, boardService, board, boards, lists) {

  $scope.board = board;
  $scope.boards = boards;
  $scope.lists = lists;
  $scope.nav = String(board.id);
  $scope.newList = {
    title: "",
    description: ""
  };
  $scope.creatingList = false;

  $scope.deleteBoard = function() {
    boardService.delete($scope.board);
  };

  $scope.createList = function() {
    listService.create($scope.newList, $scope.board);
    newList = {
      title: "",
      description: ""
    };
    $scope.creatingList = false;
  };

  $scope.updateBoard = function(attr, $data) {
    var old = $scope.board[attr];
    $scope.board[attr] = $data;
    return boardService.update($scope.board).then(function(){}, function() {
      // on failure, reset the value
      $scope.board[attr] = old;
    });
  };

  $scope.go = function() {
    boardService.goTo( Number($scope.nav) );
  };

}]);