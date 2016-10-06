phello.controller('BoardShowCtrl', ['$scope', 'boardService', 'board', function($scope, boardService, board) {

  $scope.board = board;

  $scope.deleteBoard = function() {
    boardService.delete($scope.board);
  };

}]);