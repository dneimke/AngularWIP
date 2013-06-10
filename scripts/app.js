var app;

(function () {
    'use strict';
   
    app = angular.module('devWIP', []);
    
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
    
    
    app.factory('Jobs', function () {
        
        var data = {}, items = [{
            title: 'Sugar Data Migration',
            description: 'Vestibulum sit amet enim euismod, sodales tellus et, aliquam velit. Donec mattis dolor sagittis sapien posuere fermentum et id leo. Integer imperdiet pulvinar nulla quis fermentum. Sed et posuere nisi. Aenean enim nulla, facilisis sit amet consectetur nec, porta eu nisl. Nullam justo nisl, interdum eget elementum ut, convallis et erat. Fusce posuere mi id erat sodales suscipit.',
            assignedTo: 'Darren Neimke',
            dueDate: '21-Jun-13',
            phase: 1
        },
            {
                title: 'Daily ITSS Admin',
                description: 'Vestibulum sit amet enim euismod, sodales tellus et, aliquam velit. Donec mattis dolor sagittis sapien posuere fermentum et id leo. Integer imperdiet pulvinar nulla quis fermentum. Sed et posuere nisi. Aenean enim nulla, facilisis sit amet consectetur nec, porta eu nisl. Nullam justo nisl, interdum eget elementum ut, convallis et erat. Fusce posuere mi id erat sodales suscipit.',
                assignedTo: 'Darren Neimke',
                dueDate: '21-Jun-13',
                phase: 3
            },
            {
                title: 'UI Testing Process - MTM',
                description: 'Vestibulum sit amet enim euismod, sodales tellus et, aliquam velit. Donec mattis dolor sagittis sapien posuere fermentum et id leo. Integer imperdiet pulvinar nulla quis fermentum. Sed et posuere nisi. Aenean enim nulla, facilisis sit amet consectetur nec, porta eu nisl. Nullam justo nisl, interdum eget elementum ut, convallis et erat. Fusce posuere mi id erat sodales suscipit.',
                assignedTo: 'Darren Neimke',
                dueDate: '21-Jun-13',
                phase: 3
            },
            {
                title: 'OVS CROWD Integration',
                description: 'Vestibulum sit amet enim euismod, sodales tellus et, aliquam velit. Donec mattis dolor sagittis sapien posuere fermentum et id leo. Integer imperdiet pulvinar nulla quis fermentum. Sed et posuere nisi. Aenean enim nulla, facilisis sit amet consectetur nec, porta eu nisl. Nullam justo nisl, interdum eget elementum ut, convallis et erat. Fusce posuere mi id erat sodales suscipit.',
                assignedTo: 'Darren Neimke',
                dueDate: '21-Jun-13',
                phase: 4
            },
            {
                title: 'SugarCRM WebForms Integration',
                description: 'Vestibulum sit amet enim euismod, sodales tellus et, aliquam velit. Donec mattis dolor sagittis sapien posuere fermentum et id leo. Integer imperdiet pulvinar nulla quis fermentum. Sed et posuere nisi. Aenean enim nulla, facilisis sit amet consectetur nec, porta eu nisl. Nullam justo nisl, interdum eget elementum ut, convallis et erat. Fusce posuere mi id erat sodales suscipit.',
                assignedTo: 'Darren Neimke',
                dueDate: '21-Jun-13',
                phase: 4
            },
            {
                title: 'Mothership Test Cases - Primary Calculators',
                description: 'Vestibulum sit amet enim euismod, sodales tellus et, aliquam velit. Donec mattis dolor sagittis sapien posuere fermentum et id leo. Integer imperdiet pulvinar nulla quis fermentum. Sed et posuere nisi. Aenean enim nulla, facilisis sit amet consectetur nec, porta eu nisl. Nullam justo nisl, interdum eget elementum ut, convallis et erat. Fusce posuere mi id erat sodales suscipit.',
                assignedTo: 'Darren Neimke',
                dueDate: '21-Jun-13',
                phase: 4
            },
            {
                title: 'FELS Decommissioning - OriginatorDb Timeline',
                description: 'Vestibulum sit amet enim euismod, sodales tellus et, aliquam velit. Donec mattis dolor sagittis sapien posuere fermentum et id leo. Integer imperdiet pulvinar nulla quis fermentum. Sed et posuere nisi. Aenean enim nulla, facilisis sit amet consectetur nec, porta eu nisl. Nullam justo nisl, interdum eget elementum ut, convallis et erat. Fusce posuere mi id erat sodales suscipit.',
                assignedTo: 'Darren Neimke',
                dueDate: '21-Jun-13',
                phase: 4
            },
            {
                title: 'FELS Decommissioning - DTS Action Plan',
                description: 'Vestibulum sit amet enim euismod, sodales tellus et, aliquam velit. Donec mattis dolor sagittis sapien posuere fermentum et id leo. Integer imperdiet pulvinar nulla quis fermentum. Sed et posuere nisi. Aenean enim nulla, facilisis sit amet consectetur nec, porta eu nisl. Nullam justo nisl, interdum eget elementum ut, convallis et erat. Fusce posuere mi id erat sodales suscipit.',
                assignedTo: 'Darren Neimke',
                dueDate: '21-Jun-13',
                phase: 4
            },
            {
                title: 'Database Strategy Development',
                description: 'Vestibulum sit amet enim euismod, sodales tellus et, aliquam velit. Donec mattis dolor sagittis sapien posuere fermentum et id leo. Integer imperdiet pulvinar nulla quis fermentum. Sed et posuere nisi. Aenean enim nulla, facilisis sit amet consectetur nec, porta eu nisl. Nullam justo nisl, interdum eget elementum ut, convallis et erat. Fusce posuere mi id erat sodales suscipit.',
                assignedTo: 'Darren Neimke',
                dueDate: '21-Jun-13',
                phase: 4
            },
            {
                title: 'UI Testing Process - Requirements and Test Cases',
                description: 'Vestibulum sit amet enim euismod, sodales tellus et, aliquam velit. Donec mattis dolor sagittis sapien posuere fermentum et id leo. Integer imperdiet pulvinar nulla quis fermentum. Sed et posuere nisi. Aenean enim nulla, facilisis sit amet consectetur nec, porta eu nisl. Nullam justo nisl, interdum eget elementum ut, convallis et erat. Fusce posuere mi id erat sodales suscipit.',
                assignedTo: 'Darren Neimke',
                dueDate: '21-Jun-13',
                phase: 5
            }];
        
        data.list = function () {
            return items;
        };
        
        data.get = function (name) {
            return items[0];
        };
        
        return data;
    });
    
}());