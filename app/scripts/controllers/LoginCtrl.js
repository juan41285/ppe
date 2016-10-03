(function () {
  'use strict';


   angular
    .module('ppe.controllers')
    .controller('LoginCtrl', LoginCtrl);


   function LoginCtrl($scope, $route, $location, $window, Login) {
    $scope.error = false; 
   $scope.user = {};
   $scope.ingresar = function(user){
   	  
      var u =  $scope.user.dni;
      var p =  $scope.user.pass;
      $scope.usuario = Login.query({user: u, pass: p})  
      .$promise.then(function(res){
         console.log(res.length);          
        if(res.length > 0){
           $window.localStorage.setItem('id', res[0].id);
           $window.localStorage.setItem('rol', res[0].tipo);
           $window.localStorage.setItem('name', res[0].apellido +', '+res[0].nombre);
           var rol = res[0].tipo;
           $scope.error = false;
            if(rol === 1){
               $location.path('/admin');
             }
            if(rol === 2)
             {
               $location.path('/direccion');
             }
         }
         else
         {
              $scope.error = true;
         }
                });
   }
    
}

})();
 