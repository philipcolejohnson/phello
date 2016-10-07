phello.controller('CardModalCtrl', function($scope, close, card, list) {

  $scope.card = card;
  $scope.list = list;
  
  $scope.close = function(result) {
    close(result, 500); // close, but give 500ms for bootstrap to animate
  };

});