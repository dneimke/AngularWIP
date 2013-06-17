/*global app, angular, console, applicationNames, sdlcStages, backlogPhases*/

app.controller('workItemEditorController', ['$scope', 'dialog', function ($scope, dialog, Jobs) {
    'use strict';
    
    var template = {
        title: '',
        application: '',
        description: '',
        assignedTo: 'Not yet assigned',
        dueDate: '',
        phase: '',
        stage: ''
    };
    
    $scope.job = angular.copy(template);
    
    $scope.showDebugInfo = false;
    $scope.applicationNames = applicationNames;
    $scope.stages = sdlcStages;
    $scope.phases = backlogPhases;
    
    $scope.save = function (job) {
        Jobs.add(job);
        $scope.job = angular.copy(template);
        dialog.close('ok');
    };
    
    $scope.cancel = function () {
        dialog.close('cancel');
    };
}]);