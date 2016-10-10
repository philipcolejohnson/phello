phello.controller('CardModalCtrl', ['$scope', 'close', 'card', 'list', 'cardService', function($scope, close, card, list, cardService) {

  $scope.card = card;
  $scope.list = list;
  
  $scope.close = function(result) {
    close(result, 500); // close, but give 500ms for bootstrap to animate
  };

  $scope.updateCard = function(attr, $data) {
    var old = $scope.card[attr];
    $scope.card[attr] = $data;
    return cardService.update($scope.card).then(function(){}, function() {
      // on failure, reset the value
      $scope.card[attr] = old;
    });
  };

  $scope.deleteCard = function() {
    cardService.delete($scope.card, $scope.list).then( $scope.close(false) );
  };

}]);