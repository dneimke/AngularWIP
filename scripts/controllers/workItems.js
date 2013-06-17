/*global app, angular*/

app.controller('workItemsController', function ($scope, $dialog, phaseFilter, Jobs, dateFilter) {
    'use strict';
    
    $scope.jobs = Jobs.list();
    $scope.showDebugInfo = false;
    $scope.backlogItems = phaseFilter($scope.jobs);
    
    $scope.moveLeft = function (job) {
        job.phase -= 1;
    };
    
    $scope.moveRight = function (job) {
        job.phase += 1;
    };
    
    $scope.openEditor = function () {
        var d = $dialog.dialog({dialogFade: true});
        d.open('/dialogs/item-editor.html', 'workItemEditorController');
    };
    
    $scope.openNotes = function (item) {
        var d = $dialog.dialog({dialogFade: true, resolve: { item: function () { return item; }}});
        d.open('/dialogs/item-comments.html', 'workItemCommentsController');
    };
    
    $scope.$watch('jobs', function () {
        $scope.backlogItems = phaseFilter($scope.jobs);
    }, true);
});