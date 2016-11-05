phello.service('activityService', activityService);

activityService.$inject = ['Restangular', '_', 'userService'];

function activityService(Restangular, _, userService) {

  var aS = {};
  var currentUser = userService.currentUser();
  var _activities = [];


  aS.all = function(card) {
    // console.log("Getting activities...");
    return Restangular.one('cards', card.id).all('activities').getList().then(function(response) {
      // console.log("Got all activities");
      angular.copy(response, _activities);
      return _activities;
    },
    function() {
      console.log("There was an error getting the activities");
    });
  };

  aS.create = function(card, text) {
    Restangular.one('cards', card.id).all('activities').post({
      activity: {
        text: text,
        user_id: currentUser.id
      }
    }).then(function(response) {
      _activities.push(response);
      return response;
    }, function() {
      console.log("Failed to log activity :(");
    });
  };

  return aS;

}