var phello = angular.module('phello', ['ui.router', 'restangular', 'Devise', 'xeditable', 'angularModalService']);

phello.factory('_', ['$window', function($window){
  return $window._;
}]);

phello.run(['editableOptions', 'editableThemes', function(editableOptions, editableThemes) {
  // editableThemes.bs3.buttonsClass = 'btn-danger';
  editableOptions.theme = 'bs3';
}]);

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
        board: ['$stateParams', 'boardService', function($stateParams, boardService) {
                  return boardService.find($stateParams.id);
                }],
        boards: ['boardService', function(boardService) {
                  return boardService.all();
                }],
        lists: ['board', 'listService', function(board, listService) {
                  return listService.all(board);
                }],
        users: ['userService', function(userService) {
                  return userService.all();
                }]
      }
    });
    
}]);