/**
 * Defines the service that performs CRUD operations on game items
 */
Application.Services.factory('gameService', ['configurationConstants', '$q', '$http', function (configurationConstants, $q, $http) {
    'use strict';

    return {
        /**
         * Retrieves Game Items
         * @param {string} id the name of the single item to get.
         * @return {Promise} Resolves to JSON array of items.
         */
        get : function (id) {

            var deferred;

            deferred = $q.defer();

            $http.get(configurationConstants.GAMES_URL).success(function (data) {
                var result;

                if (id) {
                    angular.forEach(data, function (obj) {
                        if (obj.id == id) {
                            result = obj;
                        }
                    });
                } else {
                    result = data;
                }

                deferred.resolve(result);
            }).error(function (data, status, headers, config) {
                    console.error(data, status, headers, config);
                    deferred.reject(data);
                });

            return deferred.promise;
        },
    };
}]);