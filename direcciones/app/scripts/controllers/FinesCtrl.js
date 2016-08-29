(function () {
  'use strict';


   angular
    .module('dm.controllers')
    .controller('FinesCtrl', FinesCtrl);


   function FinesCtrl($scope) {

   
    $scope.template = {'fines': 'templates/fines.tpl.html'};
}

})();
 