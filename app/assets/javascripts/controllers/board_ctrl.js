phello.controller('BoardCtrl', BoardCtrl);

BoardCtrl.$inject = ['$scope', 'boardService', 'boards'];

function BoardCtrl($scope, boardService, boards) {

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

  $scope.goTo = function(board) {
    boardService.goTo(board.id);
  };

}