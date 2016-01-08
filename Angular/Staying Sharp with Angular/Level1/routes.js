// JavaScript source code
angular.module('NoteWrangler')
.config(function ($routeProvider) {
    $routeProvider.when('/notes', {
        templateUrl: 'notes.html',
        controller: 'NotesIndexController',
        controllerAs: 'indexController'
    })

        .when('/notes/:id', {
            templateUrl: 'showNotes.html',
            controller: 'NotesShowController',
            controllerAs: 'showController'
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