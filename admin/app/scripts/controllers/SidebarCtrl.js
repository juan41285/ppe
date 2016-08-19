(function () {
  'use strict';


   angular
    .module('admin.controllers')
    .controller('SidebarCtrl', SidebarCtrl);


   function SidebarCtrl($scope) {

   
    $scope.template = {'sidebar': 'templates/sidebar.tpl.html'};
}

})();
 