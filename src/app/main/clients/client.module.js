(function ()
{
    'use strict';

    angular
        .module('app.clients', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.clients', {
                url    : '/clients',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/clients/clients.html',
                        controller : 'ClientsController as vm'
                    }
                }
            });

        // Translation
        // $translatePartialLoaderProvider.addPart('app/main/sample');

        // Api
        // msApiProvider.register('sample', ['app/data/sample/sample.json']);

        // Navigation
        msNavigationServiceProvider.saveItem('fuse', {
            title : 'SAMPLE',
            group : true,
            weight: 1
        });

        msNavigationServiceProvider.saveItem('fuse.clients', {
            title    : 'Clients',
            icon     : 'icon-tile-four',
            state    : 'app.clients',
            /*stateParams: {
                'param1': 'page'
             },*/
            translate: 'SAMPLE.SAMPLE_NAV',
            weight   : 1
        });
    }
})();
