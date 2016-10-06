phello.controller('BoardCtrl', ['$scope', 'boardService', 'boards', function($scope, boardService, boards) {

  $scope.boards = boards;
  $scope.newBoardName = "";

  $scope.createBoard = function() {
    boardService.create($scope.newBoardName);
    $scope.newBoardName = "";
  };

}]);