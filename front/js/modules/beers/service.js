'use strict';

angular.module('myApp.Beers.Service', [])
.service('BeerService', BeerService);

// Service
function BeerService($http) {
  var httpRequest = {
        url: 'http://localhost:3000/api/beers'
      , method: 'GET'
      }
    ;

  this.list = function(){
    return $http(httpRequest);
  }

};

// Injeção de dependências
BeerListController.$inject = ['$http'];





