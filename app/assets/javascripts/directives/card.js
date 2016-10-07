phello.directive('card', ['cardService', function(cardService) {

  return {
    restrict: "E",
    templateUrl: "/templates/lists/card.html",
    scope: {
      card: "=",
      list: "="
    },
    link: function(scope) {
      scope.showCard = function() {
        cardService.show(scope.card, scope.list);
      };
    }
  };

}]);