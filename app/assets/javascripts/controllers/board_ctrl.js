phello.controller('BoardCtrl', ['$scope', 'boardService', 'boards', '$state', function($scope, boardService, boards, $state) {

  $scope.boards = boards;
  $scope.newBoard = {
    name: ""
  };
  $scope.creatingBoard = false;

  $scope.createBoard = function() {
    boardService.create($scope.newBoardName);
    $scope.newBoard.name = "";
    $scope.creatingBoard = false;
  };

  $scope.deleteBoard = function(board) {
    boardService.delete(board);
  };

  $scope.goTo = function(board) {
    $state.go('boards.show', { id: board.id });
  };

}]);