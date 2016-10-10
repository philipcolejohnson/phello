phello.service('cardService', ['Restangular', '_', 'ModalService', function(Restangular, _, ModalService) {

  var cS = {};

  cS.show = function(card, list) {
    ModalService.showModal({
      templateUrl: "/templates/cards/show.html",
      controller: "CardModalCtrl",
      inputs: {
        card: card,
        list: list
      }
    }).then(function(modal) {

      modal.element.modal();
      modal.close.then(function(result) {
        console.log(result);
      });
    });
  };

  cS.create = function(newcard, list) {
    console.log("Creating card...");
    Restangular.all('cards').post({
      card: {
        title: newcard.title,
        description: newcard.description,
        list_id: list.id
      }
    }).then(function(response) {
      list.cards.push(response);
    });
  };

  cS.delete = function(card, list) {
    return Restangular.one('cards', card.id).remove().then(function() {
      list.cards = _.pull(list.cards, card);
    });
  };

  cS.find = function(id, list) {
    id = parseInt(id);

    return _.find(list.cards, function(el) {
      return el.id === id;
    });
  };

  cS.update = function(card) {
    return Restangular.one('cards', card.id).patch({ card: card });
  };

  return cS;

}]);