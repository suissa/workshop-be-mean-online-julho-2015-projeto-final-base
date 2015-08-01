'use strict';

angular.module('myApp.Beers', [
  'ngRoute'
, 'myApp.Beers.Controllers'
// , 'myApp.Beers.Service'
])
.config(['$routeProvider', beersConfig]);

// Config
function beersConfig($routeProvider){
  $routeProvider
    .when('/beers', {
      templateUrl: 'expose/beers/list/html',
      controller: 'BeerListController'
    })
    .when('/beers/create', {
      templateUrl: 'modules/beers/views/create.html',
      controller: 'BeerCreateController'
    })
    .when('/beers/:id', {
      templateUrl: 'modules/beers/views/get.html',
      controller: 'BeerGetController'
    })
    .when('/beers/:id/edit', {
      templateUrl: 'modules/beers/views/edit.html',
      controller: 'BeerEditController'
    })
    ;
}
beersConfig['$inject'] = ['$routeProvider'];
