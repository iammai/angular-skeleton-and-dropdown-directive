/**
 * The application file bootstraps the angular app by  initializing the main module and
 * creating namespaces and modules for controllers, filters, services, and directives.
 */

var Application = Application || {};

Application.Constants = angular.module('application.constants', []);
Application.Services = angular.module('application.services', []);
Application.Controllers = angular.module('application.controllers', []);
Application.Filters = angular.module('application.filters', []);
Application.Directives = angular.module('application.directives', []);

angular.module('application', ['ngRoute', 'appRoutes', 'application.filters', 'application.services', 'application.directives', 'application.constants', 'application.controllers']);

angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider.when('/', {
        templateUrl: 'app/components/top/top-view.html',
        controller: 'TopController'
    }).when('/games/:gameId', {
            templateUrl: 'app/components/game/game-view.html',
            controller: 'GameController'
        });

    $locationProvider.html5Mode(false);

}]);