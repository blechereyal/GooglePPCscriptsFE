(function ()
{
    'use strict';

    /**
     * Main module of the Fuse
     */
    angular
        .module('fuse', [

            // Core
            'app.core',

            // Navigation
            'app.navigation',

            // Toolbar
            'app.toolbar',

            // Quick panel
            'app.quick-panel',

            // MODULES
            'app.sample',
            'app.auth.forgot-password',
            'app.auth.lock',
            'app.auth.login',
            'app.auth.register',
            'app.auth.reset-password',

            // Third party
            'ng-token-auth'
        ]);
})();