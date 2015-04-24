/**
 * Defines the service that performs CRUD operations on menu items
 *  In this example case, we only need a GET
 */
Application.Services.factory('menuService', ['configurationConstants', '$q', '$http', function (configurationConstants, $q, $http) {
    'use strict';

    return {
        /**
         * Retrieves Menu Items
         * @param {string} id the name of the single item to get.
         * @return {Promise} Resolves to JSON array of items.
         */
        get : function (id) {

            var deferred;

            deferred = $q.defer();

            $http.get(configurationConstants.MENU_URL).success(function (data) {
                var result = data;
                deferred.resolve(result);
            }).error(function (data, status, headers, config) {
                    console.error(data, status, headers, config);
                    deferred.reject(data);
                });

            return deferred.promise;
        },
    };
}]);