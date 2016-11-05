phello.directive('card', card);

card.$inject = ['cardService'];

function card(cardService) {

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

}