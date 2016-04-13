(function ()
{
    'use strict';

    angular
        .module('app.clients')
        .controller('ClientsController', ClientsController);

    /** @ngInject */
    function ClientsController(api)
    {
        var vm = this;

        // Methods
        api.client.list.get({},
            // Success
            function (response)
            {
                vm.clients = response.clients;
            }
        );
        //////////
    }
})();
