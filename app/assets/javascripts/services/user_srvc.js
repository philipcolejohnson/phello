phello.service('userService', ['Restangular', '_', function(Restangular, _) {

  var uS = {};

  uS.all = function(board) {
    console.log("Getting lists...");
    return Restangular.all('lists').getList({ board_id: board.id }).then(function(response) {
      console.log("Got all lists");
      angular.copy(response, _lists);
      return _lists;
    },
    function() {
      console.log("There was an error getting the lists");
    });
  };

  uS.create = function(newList, board) {
    console.log("Creating list...");
    Restangular.all('lists').post({
      list: {
        title: newList.title,
        description: newList.description,
        board_id: board.id
      }
    }).then(function(response) {
      response.cards = [];
      _lists.push(response);
    });
  };

  uS.delete = function(list) {
    list.remove().then(function() {
      _lists = _.pull(_lists, list);
    });
  };

  uS.find = function(id) {
    id = parseInt(id);

    return _.find(_lists, function(el) {
      return el.id === id;
    });
  };

  uS.update = function(list) {
    return list.patch({ list: list });
  };

  return uS;

}]);