/*global app*/

app.controller('workItemsController', function ($scope, $dialog, phaseFilter, Jobs, dateFilter) {
    'use strict';
    
    $scope.jobs = Jobs.list();
    
    $scope.newNote = '';
    $scope.noteEditorCollapsed = true;
    $scope.notesVisible = false;
    $scope.selectedItem = {};
    $scope.showDebugInfo = false;
    
    $scope.backlogItems = phaseFilter($scope.jobs);
    
    $scope.moveLeft = function (job) {
        job.phase -= 1;
    };
    
    $scope.moveRight = function (job) {
        job.phase += 1;
    };
    
    /* Editor */
    $scope.openEditor = function () {
        var d = $dialog.dialog({dialogFade: false});
        d.open('/dialogs/item-editor.html', 'workItemEditorController');
    };
    
    
    /* Notes */
    $scope.openNotes = function (item) {
        $scope.selectedItem = item;
        $scope.notesVisible = true;
    };
    
    $scope.closeNotes = function () {
        $scope.selectedItem = {};
        $scope.newNote = '';
        $scope.noteEditorCollapsed = true;
        $scope.notesVisible = false;
    };
    
    $scope.addNote = function () {
        $scope.newNote = '';
        $scope.noteEditorCollapsed = false;
    };
    
    $scope.saveNewNote = function () {
        if ($scope.selectedItem.notes === undefined || $scope.selectedItem.notes.length === 0) {
            $scope.selectedItem.notes = [];
        }
        $scope.selectedItem.notes.push({date: dateFilter(Date.now(), 'dd-MMM-yyyy'), note: $scope.newNote});
        $scope.newNote = '';
        $scope.noteEditorCollapsed = true;
    };
  

    $scope.$watch('jobs', function () {
        $scope.backlogItems = phaseFilter($scope.jobs);
    }, true);
});