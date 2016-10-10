phello.service('userService', ['Restangular', '_', function(Restangular, _) {

  var uS = {};
  var _users = [];

  uS.all = function(board) {
    console.log("Getting users...");
    return Restangular.all('users').getList().then(function(response) {
      console.log("Got all users");
      angular.copy(response, _users);
      return _users;
    },
    function() {
      console.log("There was an error getting the users");
    });
  };

  uS.getUsers = function() {
    return _users;
  };

  uS.find = function(id) {
    id = parseInt(id);

    return _.find(_lists, function(el) {
      return el.id === id;
    });
  };

  return uS;

}]);