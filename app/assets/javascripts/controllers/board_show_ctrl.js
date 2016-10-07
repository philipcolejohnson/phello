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

  $scope.deleteList = function() {
    listService.delete($scope.board);
  };

  $scope.createList = function() {
    listService.create($scope.newList, $scope.board);
    newList = {
      title: "",
      description: ""
    };
    $scope.creatingList = false;
  };

  $scope.go = function() {
    boardService.goTo( Number($scope.nav) );
  };

}]);