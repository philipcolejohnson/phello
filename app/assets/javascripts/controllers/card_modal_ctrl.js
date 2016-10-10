phello.controller('CardModalCtrl', ['$scope', 'Auth', 'close', 'card', 'list', 'cardService', 'users', 'current_user', 'activityService', function($scope, Auth, close, card, list, cardService, users, current_user, activityService) {

  $scope.card = card;
  $scope.list = list;
  $scope.users = users;
  $scope.current_user = current_user;
  $scope.memberForm = String($scope.users[0].id);

  activityService.all(card).then(function(response) {
    $scope.activities = response;
  });

  
  $scope.close = function(result) {
    close(result, 500); // close, but give 500ms for bootstrap to animate
  };

  $scope.updateCard = function(attr, $data) {
    var old = $scope.card[attr];
    $scope.card[attr] = $data;
    return cardService.update($scope.card).then(function(){
        activityService.create($scope.card, $scope.current_user.email + " updated the " + attr + " of this card to \"" + $data + "\".");
      }, function() {
      // on failure, reset the value
      $scope.card[attr] = old;
    });
  };

  $scope.deleteCard = function() {
    cardService.delete($scope.card, $scope.list).then( $scope.close(false) );
  };

  $scope.addMember = function() {
    cardService.addMember($scope.card, $scope.memberForm);
  };

  $scope.removeMember = function(user) {
    cardService.removeMember(card, user.id);
  };

}]);