app.controller('BacklogItemController', function ($scope, $routeParams, Jobs) {
    'use strict';
    
    $scope.job = Jobs.get($routeParams.title);
});