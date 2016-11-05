phello.directive('list', list);

list.$inject = ['cardService', 'listService'];

function list(cardService, listService) {

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

      scope.updateList = function(attr, $data) {
        var old = scope.list[attr];
        scope.list[attr] = $data;
        return listService.update(scope.list).then(function(){}, function() {
          // on failure, reset the value
          scope.list[attr] = old;
        });
      };

      scope.deleteList = function() {
        listService.delete(scope.list);
      };
    }
  };

}