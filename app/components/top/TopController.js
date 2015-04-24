/***
 * Manages the top view scope.

 */
Application.Controllers.controller('TopController', ['gameService', '$scope', function (gameService, $scope) {
    'use strict';
    gameService.get().then(function (games) {
        $scope.games = games;
    });
}]);
