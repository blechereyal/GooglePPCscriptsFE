(function ()
{
    'use strict';

    angular
        .module('fuse')
        .controller('IndexController', IndexController);

    /** @ngInject */
    function IndexController(fuseTheming, $auth)
    {
        var vm = this;

        // Data
        vm.themes = fuseTheming.themes;
    }
})();
