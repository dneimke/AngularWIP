function BacklogListController($scope, phaseFilter, Jobs) {
    'use strict';
    
    $scope.jobs = Jobs.list();
    
    $scope.backlogItems = phaseFilter($scope.jobs);
    
    $scope.moveLeft = function (job) {
        job.phase -= 1;
    };
    
    $scope.moveRight = function (job) {
        job.phase += 1;
    };
    
    $scope.$watch('jobs', function () {
        $scope.backlogItems = phaseFilter($scope.jobs);
    }, true);
}