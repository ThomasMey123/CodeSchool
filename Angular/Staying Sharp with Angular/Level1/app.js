// JavaScript source code
angular.module('NoteWrangler', ['ngRoute'])
    .controller('NotesIndexController', function() {
        var controller = this;
        $http({method: 'GET', url: 'http://localhost:63342/Level1/Index.html#/notes.json'}).success(function(data){
            controller.notes = data;
        })
    });

