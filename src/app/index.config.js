(function ()
{
    'use strict';

    angular
        .module('fuse')
        .config(config);

    /** @ngInject */
    function config($authProvider)
    {
        // Put your custom configurations here

        $authProvider.configure({
            apiUrl: 'http://localhost:3000'
        });
    }

})();