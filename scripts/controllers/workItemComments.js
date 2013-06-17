/*global app, angular, console, applicationNames, sdlcStages, backlogPhases*/

app.controller('workItemCommentsController', ['$scope', 'dialog', 'dateFilter', 'item', function ($scope, dialog, dateFilter, item) {
    'use strict';
    
    $scope.newNote = '';
    $scope.noteEditorCollapsed = true;
    $scope.selectedItem = item;
    
    $scope.save = function () {
        if ($scope.selectedItem.notes === undefined || $scope.selectedItem.notes.length === 0) {
            $scope.selectedItem.notes = [];
        }
        $scope.selectedItem.notes.push({date: dateFilter(Date.now(), 'dd-MMM-yyyy'), note: $scope.newNote});
        $scope.newNote = '';
        $scope.noteEditorCollapsed = true;
        
        dialog.close(true);
    };
    
    $scope.cancel = function () {
        dialog.close(false);
    };
}]);