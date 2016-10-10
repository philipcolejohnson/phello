phello.service('userService', ['Restangular', '_', 'Auth', function(Restangular, _, Auth) {

  var uS = {};
  var _users = [];
  var _currentUser;

  Auth.currentUser()
      .then(function(user) {
        _currentUser = user;
      }, function(response) {
        console.error(response);
      });

  uS.currentUser = function() {
    return _currentUser;
  };

  uS.all = function(board) {
    return Restangular.all('users').getList().then(function(response) {
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