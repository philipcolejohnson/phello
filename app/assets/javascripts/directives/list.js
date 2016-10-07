phello.directive('list', ['cardService', function(cardService) {

  return {
    restrict: "E",
    templateUrl: "/templates/lists/show.html",
    scope: {
      list: "="
    },
    link: function(scope) {
      function Card() {
        this.title = "";
        this.description = "";
        this.completed = false;
      }

      scope.newCard = new Card();
      scope.creatingCard = false;

      scope.addCard = function() {
        cardService.create(scope.newCard, scope.list);

        scope.creatingCard = false;
        scope.newCard = new Card();
      };
    }
  };

}]);