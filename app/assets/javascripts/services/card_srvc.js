phello.service('cardService', ['Restangular', '_', 'ModalService', 'userService', function(Restangular, _, ModalService, userService) {

  var cS = {};

  cS.show = function(card, list) {
    ModalService.showModal({
      templateUrl: "/templates/cards/show.html",
      controller: "CardModalCtrl",
      inputs: {
        card: card,
        list: list,
        users: userService.getUsers()
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

  cS.addMember = function (card, member_id) {
    var newAssignment = {
      assignment: {
        card_id: card.id,
        user_id: member_id
      }
    };
    Restangular.all('assignments').post(newAssignment).then(function(user) {
      card.workers.push(user);
    });
  };

  cS.removeMember = function (card, member_id) {
    var assignment = {
      card_id: card.id,
      user_id: member_id
    };
    Restangular.all('assignments').remove(assignment).then(function(response) {
      var user = _.find(card.workers, ['id', Number(member_id)] );
      _.pull(card.workers, user);
    });
  };

  return cS;

}]);