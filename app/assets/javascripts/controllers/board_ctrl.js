phello.controller('BoardCtrl', ['$scope', 'boardService', 'boards', function($scope, boardService, boards) {

  $scope.boards = boards;
  $scope.newBoardName = "";
  $scope.creatingBoard = false;

  $scope.createBoard = function() {
    boardService.create($scope.newBoardName);
    $scope.newBoardName = "";
    $scope.creatingBoard = false;
  };

}]);