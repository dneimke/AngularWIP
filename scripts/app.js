/*global angular*/

var app;

(function () {
    'use strict';
   
    app = angular.module('devWIP', ['ui.bootstrap']);
    
    app.config(function ($routeProvider) {
    
        $routeProvider.
            when('/', {
                templateUrl: 'views/list.html'
            }).
            when('/view/:title', {
                controller: 'BacklogItemController',
                templateUrl: 'views/detail.html'
            }).
            otherwise({
                redirectTo: '/'
            });
    });
    
    app.factory('phaseFilter', function () {
        return function (data) {
            var mappedData = {'Aware': [], 'Backlog': [], 'Scheduled': [], 'InProgress': [], 'Delivery': []};
            
            mappedData.Aware = data.filter(function (element) {
                return (element.phase === 1);
            });
            
            mappedData.Backlog = data.filter(function (element) {
                return (element.phase === 2);
            });
              
            mappedData.Scheduled = data.filter(function (element) {
                return (element.phase === 3);
            });
              
            mappedData.InProgress = data.filter(function (element) {
                return (element.phase === 4);
            });
              
            mappedData.Delivery = data.filter(function (element) {
                return (element.phase === 5);
            });
            
            return mappedData;
        };
    });
}());
