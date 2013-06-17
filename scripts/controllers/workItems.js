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
    
    /* Editor */
    $scope.openEditor = function () {
        var d = $dialog.dialog({dialogFade: true});
        d.open('/dialogs/item-editor.html', 'workItemEditorController');
    };
    
    
    var commentDialogOptions = {
        controller: 'workItemCommentsController',
        templateUrl: 'dialogs/item-comments.html'
    };
    
    /* Notes */
    $scope.openNotes = function (item) {
        $dialog.dialog(angular.extend(commentDialogOptions, {resolve: {item: function () {return item; }}}))
            .open();
//            .then(function (result.hasNote) {
//                if (result) {
//                    item.notes.push(result.note);
//                }
//            });
    };
    
    $scope.$watch('jobs', function () {
        $scope.backlogItems = phaseFilter($scope.jobs);
    }, true);
});