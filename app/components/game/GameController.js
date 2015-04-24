Application.Controllers.controller('GameController', ['gameService', '$scope', '$routeParams', function (gameService, $scope, $routeParams) {
    'use strict';
    var id;
    id = $routeParams.gameId;

    gameService.get(id).then(function (game) {

        $scope.game = game;
        $scope.code = game.videos[0].id;
        $scope.start =  game.videos[0].start;

        $scope.changeVideo = function(videoIndex) {
            $scope.code = game.videos[videoIndex].id;
            $scope.start = game.videos[videoIndex].start;
        };

    });

}]);



