/*global app*/

app.controller('BacklogListController', function ($scope, phaseFilter, Jobs, dateFilter) {
    'use strict';
    
    $scope.jobs = Jobs.list();
    
    $scope.newNote = '';
    $scope.isCollapsed = true;
    $scope.shouldBeOpen = false;
    $scope.selectedItem = {};
    $scope.showDebugInfo = false;
    
    $scope.backlogItems = phaseFilter($scope.jobs);
    
    $scope.moveLeft = function (job) {
        job.phase -= 1;
    };
    
    $scope.moveRight = function (job) {
        job.phase += 1;
    };
    
    $scope.openNotes = function (item) {
        $scope.selectedItem = item;
        $scope.shouldBeOpen = true;
    };
    
    $scope.closeNotes = function () {
        $scope.selectedItem = {};
        $scope.shouldBeOpen = false;
    };
    
    $scope.addNote = function () {
        $scope.newNote = '';
        $scope.isCollapsed = false;
    };
    
    $scope.saveNewNote = function () {
        if( $scope.selectedItem.notes == undefined || $scope.selectedItem.notes.length == 0 ) {
            $scope.selectedItem.notes = [];
        }
        $scope.selectedItem.notes.push({date: dateFilter(Date.now(), 'dd-MMM-yyyy'), note: $scope.newNote});
        $scope.newNote = '';
        $scope.isCollapsed = true;
    };
  

    $scope.opts = {
        backdropFade: true,
        dialogFade: true
    };
    
    $scope.$watch('jobs', function () {
        $scope.backlogItems = phaseFilter($scope.jobs);
    }, true);
});