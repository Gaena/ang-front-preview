let app = angular.module('App', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/search', {
            templateUrl: 'public/search.html'
        })
        .when('/users', {
            templateUrl: 'public/users.html',
            controller: 'usersController'
        })
        .when('/edit', {
            templateUrl: 'public/edit.html',
            // controller: 'usersController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
