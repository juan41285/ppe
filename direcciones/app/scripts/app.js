(function () {
  'use strict';

  // /* @ngInject */
  angular
    .module('dm', ['ngRoute','dm.controllers','dm.directives','dm.templates','ui.bootstrap','ngAnimate','ngTouch'])
    .config(config);


 
  function config ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
     $.material.init();


    $routeProvider
      .when('/', {
        templateUrl: 'templates/home.tpl.html',
        controller: 'HomeCtrl',
        controllerAs: 'home',
        activeMenu:'/'
      })
    .when('/admin', {
        templateUrl: 'templates/admin.tpl.html',
        controller: 'AdminCtrl',
        controllerAs: 'admin',
        activeMenu:'admin'
      })

      .otherwise({ reditrectTo : "/" });
  }

   

})();

