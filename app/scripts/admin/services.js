(function(){
  'use strict';

  angular
  .module('ppe.services')
  .factory('Direccion', Direccion)
  .factory('getDm', getDm)
  .factory('Planes', Planes)
  .factory('Ejes', Ejes)
  .factory('Estrategicos', Estrategicos)
  .factory('Operativos', Operativos)
  .factory('Indicadores', Indicadores)
  .factory('Fines', Fines)
  .factory('Proyectos', Proyectos)
  .factory('Acciones', Acciones);

function Direccion($resource, BaseUrl,$http,getDm){

      return {
      saveUser: saveUser
    };

    function saveUser(responsable, direccion){
      console.log(responsable);
      // responsable.pass='ppe123456';
      $http({
          method: 'POST',
          url: BaseUrl +'/usuario',
          data: $.param(responsable),
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(function(res){
        
           console.log(res.data['id']);
             var responsable = res.data['id'];
          direccion.responsable = responsable
          $http({
          method: 'POST',
          url: BaseUrl +'/direcciones',
          data: $.param(direccion),
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
           }).then(function(res){
              console.log(res);
             
           })
          
      });
    };

   
}

 function getDm($resource, BaseUrl){
      return $resource(BaseUrl + '/direcciones', {},  { get: { method: 'GET', isArray: true } });
}
  
function Planes($resource, BaseUrl){
  return $resource(BaseUrl + '/planes', {},  { get: { method: 'GET', isArray: true } });
}
function Ejes($resource, BaseUrl){
  return $resource(BaseUrl + '/ejes', {},  { get: { method: 'GET', isArray: true } });
}
 function Estrategicos($resource, BaseUrl){
  return $resource(BaseUrl + '/estrategicos', {},  { get: { method: 'GET', isArray: true } });
}
 function Operativos($resource, BaseUrl){
  return $resource(BaseUrl + '/operativos', {},  { get: { method: 'GET', isArray: true } });
}
 function Indicadores($resource, BaseUrl){
  return $resource(BaseUrl + '/indicadores', {},  { get: { method: 'GET', isArray: true } });
}  
 function Fines($resource, BaseUrl){
  return $resource(BaseUrl + '/fines', {},  { get: { method: 'GET', isArray: true } });
}  
 function Proyectos($resource, BaseUrl){
  return $resource(BaseUrl + '/proyecto', {},  { get: { method: 'GET', isArray: true } });
}  
 function Acciones($resource, BaseUrl){
  return $resource(BaseUrl + '/accion', {},  { get: { method: 'GET', isArray: true } });
}  
})();