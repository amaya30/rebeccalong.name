(function(angular) {
    angular.
        module('portfolio').
        controller('MainCtrl', mainCtrl);

    mainCtrl.$inject = ['$state'];

    function mainCtrl($state) {
        var vm = this;

        console.log('Should work');

        vm.navigate = navigate;

        function navigate() {
            $state.go('main');
        }
    }

})(window.angular);