// JavaScript source code
angular.module('NoteWrangler')
.config(function ($routeProvider) {
    $routeProvider.when('/notes', {
        templateUrl: 'notes.html',
    })

    .when('/users', {
        templateUrl: 'users.html'
    })

    .when('/', {
        templateUrl: 'notes.html'
    })

    .otherwise({
            redirectTo: '/'
    });
});