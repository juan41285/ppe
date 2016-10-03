(function () {
  'use strict';


   angular
    .module('ppe.controllers')
    .controller('MenuCtrl', MenuCtrl);


   function MenuCtrl ($scope,$route,$location, $window) {

    $scope.$route = $route;
    $scope.template = {'admin': 'templates/admin/menu.tpl.html', 'direccion': 'templates/direcciones/menu.tpl.html'};
    $scope.menuToggle = 0;    
    // $scope.menuAdmin = true;    
     $scope.nombre = $window.localStorage.getItem('name');
    // $scope.menuppe = true;    
    $scope.salir = function(){
        $window.localStorage.setItem('id', '');
           $window.localStorage.setItem('rol', '');
           $window.localStorage.setItem('name', '');
           $route.reload();
           $location.path('/');
     }

    

     

       $scope.$on('$routeChangeSuccess', function() {
          $scope.nombre = $window.localStorage.getItem('name');
       var rol = $window.localStorage.getItem('rol');
       var path = $location.path();
       console.log(path);
     $scope.menuToggle = 0;
      if(path === '/admin' || rol === '1') {
        $scope.menuToggle = 1;    

      }
    if(path === '/direccion' || rol === '2') {
        $scope.menuToggle = 2;    

      }

    });
}

})();
 