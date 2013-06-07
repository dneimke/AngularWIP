(function () {
    'use strict';
   
    var app = angular.module('devWIP', []);
    
    app.config(function ($routeProvider) {
    
        $routeProvider.
            when('/', {
                templateUrl: 'views/main.html'
            }).
            when('/blah/:identifier', {
                controller: 'someController',
                templateUrl: 'views/someView.html'
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