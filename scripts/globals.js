var BacklogPhase = { Aware: 1, Backlog: 2, Scheduled: 3, InProgress: 4, Delivery: 5, Delivered: 6 }, /* Where is the work on the conveyor belt? */
    SDLCPhase = { None: 0, Analysis: 1, Design: 2, Build: 3, Release: 4, Review: 5 }, /* What phase of our development process is the work currently in? */
    AppNames = {
        FELS: 'FELS',
        FELSDecommissioning: 'FELS - Decommissioning',
        FELSIntegration: 'FELS - Integration',
        Greenlight: 'Greenlight',
        HomeStartWebsite: 'HomeStart Website',
        InternalProcesses: 'Internal Processes',
        Mothership: 'Mothership',
        OVS: 'OVS',
        SugarCRM: 'FELS - SugarCRM'
    },
    backlogPhases = [
        {displayName: 'Aware', phase: BacklogPhase.Aware},
        {displayName: 'Backlog', phase: BacklogPhase.Backlog},
        {displayName: 'Scheduled', phase: BacklogPhase.Scheduled},
        {displayName: 'InProgress', phase: BacklogPhase.InProgress},
        {displayName: 'Delivery', phase: BacklogPhase.Delivery},
        {displayName: 'Delivered', phase: BacklogPhase.Delivered}],
    sdlcStages = [
        {displayName: 'None', stage: SDLCPhase.None},
        {displayName: 'Analysis', stage: SDLCPhase.Analysis},
        {displayName: 'Design', stage: SDLCPhase.Design},
        {displayName: 'Build', stage: SDLCPhase.Build},
        {displayName: 'Release', stage: SDLCPhase.Release},
        {displayName: 'Review', stage: SDLCPhase.Review}],
    applicationNames = [
        AppNames.FELS,
        AppNames.FELSDecommissioning,
        AppNames.FELSIntegration,
        AppNames.Greenlight,
        AppNames.HomeStartWebsite,
        AppNames.InternalProcesses,
        AppNames.Mothership,
        AppNames.OVS,
        AppNames.SugarCRM
    ];