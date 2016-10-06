var phello = angular.module('phello', ['ui.router', 'restangular', 'Devise']);

phello.factory('_', ['$window', function($window){
  return $window._;
}]);

// CSRF support
// phello.config(
//   ["$httpProvider",
//   function($httpProvider) {
//     var token = $('meta[name=csrf-token]')
//       .attr('content');
//     $httpProvider
//       .defaults
//       .headers
//       .common['X-CSRF-Token'] = token;
// }]);

phello.config(['RestangularProvider', function(RestangularProvider) {
  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');
}]);

phello.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('boards', {
      url: '/',
      templateUrl: '/templates/boards/index.html',
      controller: 'BoardCtrl',
      resolve: {
        boards: function(boardService) {
            return boardService.all();
        }
      }
    });
    
}]);