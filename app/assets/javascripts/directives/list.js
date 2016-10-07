phello.directive('list', [function() {

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

      scope.addCard = function() {
        // save the card
        
        scope.newCard = new Card();
      };
    }
  };

}]);