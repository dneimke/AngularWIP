/*global app*/

app.controller('workItemController', function ($scope, $routeParams, Jobs) {
    'use strict';
    
    $scope.job = Jobs.get($routeParams.title);
});