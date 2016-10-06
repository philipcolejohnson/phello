phello.controller('BoardShowCtrl', ['$scope', 'listService', 'board', 'lists', function($scope, listService, board, lists) {

  $scope.board = board;
  $scope.lists = lists;
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

}]);