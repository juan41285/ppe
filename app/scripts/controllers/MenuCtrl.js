(function () {
  'use strict';


   angular
    .module('ppe.controllers')
    .controller('MenuCtrl', MenuCtrl);


   function MenuCtrl ($scope,$route) {

    $scope.$route = $route;
    $scope.template = {'menu': 'templates/menu.tpl.html'};
}

})();
 