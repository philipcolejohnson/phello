phello.controller('BoardCtrl', ['$scope', 'boardService', 'boards', function($scope, boardService, boards) {

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
    boardService.goTo(board);
  };

}]);