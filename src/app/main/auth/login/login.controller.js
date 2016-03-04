(function ()
{
    'use strict';

    angular
        .module('app.auth.login')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController($scope, $state, $auth)
    {
      // Data

      // Methods

      $scope.login = function() {
        $auth.submitLogin($scope.vm.form)
        .then(function(resp) {
          $state.go('app.sample')
        })
        .catch(function(resp) {
        });
      }

      //////////
    }
})();
