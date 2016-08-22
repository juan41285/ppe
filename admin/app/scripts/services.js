(function(){
  'use strict';

  angular
  .module('admin.services', ['ngResource'])
  .constant('BaseUrl', 'http://rest.innovacioneducativa.gob.ar/ppe/')
  .factory('Direccion', Direccion);

  

  function Direccion($resource,BaseUrl,$http){
     return {
       saveDir: saveDir,
       getDir: getDir,
       deleteDir: deleteDir,
       newDir: newDir
     };

  function saveDir(object){
    var dir = JSON.parse($window.localStorage.getItem('saveDir')) || [];
  

        dir.push(object);
        $window.localStorage.setItem('saveDir', JSON.stringify(dir));
   
  }

  function getDir(){
    return JSON.parse($window.localStorage.getItem('saveDir')) || [];
  }

     function deleteDir(id){
       var Dir = JSON.parse($window.localStorage.getItem('saveDir'));
       for (var i = 0; i < Dir.length; i++) {
         if( Dir[i].id == id){
            Dir.splice(i, 1);
          }
       }
       $window.localStorage.setItem('saveDir', JSON.stringify(Dir));
     }
     function newDir(object){
       $window.localStorage.setItem('saveDir', JSON.stringify(object));
     }
  }

  
})();