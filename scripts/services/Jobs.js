/*global app, AppNames, BacklogPhase, SDLCPhase*/

// TODO: need to pull the data from a resource provider and keep Jobs as a testable service interface
app.factory('Jobs', function () {
    'use strict';
    
    var data = {}, items = [
  {
    "title": "Sugar Data Migration",
    "application": "FELS - SugarCRM",
    "description": "Refer the current plan for synchronizing data between existing HomeStart applications and SugarCRM.",
    "assignedTo": "Not yet assigned",
    "dueDate": "N/A",
    "phase": 1,
    "stage": 0,
    "support": {
      "required": true,
      "requiresSDM": true,
      "purpose": ""
    },
    "notes": [
      {
        "date": "11-Jun-2013",
        "note": "Currently with the business process owner to determine processing rule logic and get documented."
      }
    ]
  },
  {
    "title": "Daily ITSS Administration Process Refinement",
    "application": "Internal Processes",
    "description": "Assign and triage incoming IT Support System items on a daily basis following a repeatable process.",
    "assignedTo": "Not yet assigned",
    "dueDate": "15-Jul-2013",
    "phase": 4,
    "stage": 2,
    "support": {
      "required": true,
      "requiresSDM": false,
      "purpose": ""
    },
    "notes": []
  },
  {
    "title": "UI Testing Process - MTM Action Recordings",
    "application": "Internal Processes",
    "description": "Take the test scripts and add them to TFS using MTM.  Record the tests as recorded actions.  When this is done, hold a meeting to discuss the findings.",
    "assignedTo": "Not yet assigned",
    "dueDate": "15-Jun-13",
    "phase": 4,
    "stage": 2,
    "support": {
      "required": true,
      "requiresSDM": true,
      "purpose": ""
    },
    "notes": []
  },
  {
    "title": "UI Testing Process - Coded UI Tests",
    "application": "Internal Processes",
    "description": "Take the recorded MTM actions and automate them using Coded UI Tests.  When this is done, hold a meeting to discuss the findings.",
    "assignedTo": "Not yet assigned",
    "dueDate": "N/A",
    "phase": 1,
    "stage": 1,
    "support": {
      "required": true,
      "requiresSDM": true,
      "purpose": ""
    },
    "notes": []
  },
  {
    "title": "CROWD Federated Identity Integration",
    "application": "OVS",
    "description": "Change the identity management scheme for the Valuation System to integrate with Active Directory via CROWD.  Plan the release of this change with business stakeholders and communicate with our external partner vendor and the internal Infrastructure team to align with core SSO implementation",
    "assignedTo": "Not yet assigned",
    "dueDate": "30-Jun-13",
    "phase": 5,
    "stage": 4,
    "support": {
      "required": true,
      "requiresSDM": false,
      "purpose": ""
    },
    "notes": [
      {
        "date": "14-Jun-2013",
        "note": "Support developer by helping him to work through the release plan.  Work with him on timelines and also ensuring that stakeholders are responsible for what we need from them."
      }
    ]
  },
  {
    "title": "WebForms Integration",
    "application": "FELS - SugarCRM",
    "description": "Plan and implement the SugarCRM WebForms integration with core front end system stakeholders.  Ensure that the layer that is used to talk to SugarCRM is designed with API principles.",
    "assignedTo": "Not yet assigned",
    "dueDate": "15-Jul-2013",
    "phase": 4,
    "stage": 3,
    "support": {
      "required": true,
      "requiresSDM": false,
      "purpose": ""
    },
    "notes": [
      {
        "date": "11-Jun-2013",
        "note": "Support the developer with writing the SugarCRM API code.  Discussion took place about fixing the scope of the web forms and that people are not changing the underlying web forms without making formal change requests. "
      }
    ]
  },
  {
    "title": "Implement Test Cases - Primary Calculators",
    "application": "Calculators",
    "description": "Implement the collected Primary Calculator test cases as coded unit tests.",
    "assignedTo": "Not yet assigned",
    "dueDate": "30-Jun-13",
    "phase": 4,
    "stage": 3,
    "support": {
      "required": true,
      "requiresSDM": false,
      "purpose": ""
    },
    "notes": [
      {
        "date": "11-Jun-2013",
        "note": "Expecting about 2 days work this week as the other 2 days will be spent doing IT Support System work.  Inspection required later in the week to see where code coverage is at."
      },
      {
        "date": "14-Jun-2013",
        "note": "We have decided to finish this work within 2 weeks.  This needs to include merging to trunk and ensuring that tests are running in both the nightly and release builds.  Please also check coverage for work done to date and communicate through to the team."
      }
    ]
  },
];
    
    data.list = function () {
        return items;
    };
    
    data.get = function (name) {
        return items[0];
    };
    
    data.add = function (job) {
        return items.push(job);
    };
    
    return data;
});