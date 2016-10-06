var phello = angular.module('phello', ['ui.router', 'restangular', 'Devise', 'xeditable']);

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

phello.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

phello.config(['RestangularProvider', function(RestangularProvider) {
  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');
}]);

phello.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('dashboard', {
      url: '',
      templateUrl: '/templates/boards/index.html',
      controller: 'BoardCtrl',
      resolve: {
        boards: function(boardService) {
            return boardService.all();
        }
      }
    })

    .state('boards', {
      url: '/boards',
      abstract: true,
      template: '<ui-view></ui-view>'
    })

    .state('boards.show', {
      url: '/:id',
      templateUrl: '/templates/boards/show.html',
      controller: 'BoardShowCtrl',
      resolve: {
        board: function($stateParams, boardService) {
          return boardService.find($stateParams.id);
        }
      }
    });
    
}]);