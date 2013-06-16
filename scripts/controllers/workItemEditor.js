/*global app, angular, applicationNames, sdlcStages, backlogPhases*/

app.controller('JobEditorController', function ($scope, Jobs) {
    'use strict';
    
    var template = {
        title: '',
        application: '',
        description: '',
        assignedTo: '',
        dueDate: '',
        phase: '',
        stage: ''
    };
    
    $scope.job = angular.copy(template);
    
    $scope.showDebugInfo = false;
    $scope.applicationNames = applicationNames;
    $scope.stages = sdlcStages;
    $scope.phases = backlogPhases;
    
    $scope.isEditing = false;
    
    $scope.toggleEditMode = function () {
        $scope.isEditing = !$scope.isEditing;
    };
    
    $scope.save = function (job) {
        console.log(job.$invalid);
        Jobs.add(job);
        $scope.job = angular.copy(template);
        $scope.isEditing = false;
    };
});