(function ()
{
    'use strict';

    angular
        .module('app.auth.register')
        .controller('RegisterController', RegisterController);

    /** @ngInject */
    function RegisterController($scope, $state, $auth)
    {
        // Data

        // Methods
        $scope.register = function() {
          $auth.submitRegistration($scope.vm.form)
          .then(function(resp) {
            $state.go('app.sample')
          })
          .catch(function(resp) {
          });
        }
        //////////
    }
})();
