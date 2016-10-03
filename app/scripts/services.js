(function(){
  'use strict';



  
  function Login($resource, BaseUrl){
   return $resource(BaseUrl + '/login/:user/:pass', { user: '@_user', pass: '@_pass'});
  }

  angular
  .module('ppe.services', ['ngResource'])
  .constant('BaseUrl', 'http://lumen.innovacioneducativa.gob.ar')
  .factory('Login', Login);
  
})();