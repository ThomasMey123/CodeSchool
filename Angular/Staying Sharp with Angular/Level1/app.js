// JavaScript source code
angular.module('NoteWrangler', ['ngRoute'])
    .controller('NotesIndexController', function() {
        var controller = this;
        $http({method: 'GET', url: '/notes'}).success(function(data){
            controller.notes = data;
        })
    });

