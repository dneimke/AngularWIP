(function () {
    'use strict';
    
    function BacklogController($scope, phaseFilter) {
        $scope.backlogItems = phaseFilter([
            {title: 'Sugar Data Migration', phase: 1},
            {title: 'Daily ITSS Admin', phase: 3},
            {title: 'UI Testing Process - MTM', phase: 3},
            {title: 'OVS CROWD Integration', phase: 4},
            {title: 'SugarCRM WebForms Integration', phase: 4},
            {title: 'Mothership Test Cases - Primary Calculators', phase: 4},
            {title: 'FELS Decommissioning - OriginatorDb Timeline', phase: 4},
            {title: 'FELS Decommissioning - DTS Action Plan', phase: 4},
            {title: 'Database Strategy Development', phase: 4},
            {title: 'UI Testing Process - Requirements and Test Cases', phase: 5}
        ]);
    }
}());