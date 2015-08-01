'use strict';

angular.module('myApp.Beers.Controllers', [])
.controller('BeerListController', BeerListController)
.controller('BeerCreateController', BeerCreateController)
.controller('BeerGetController', BeerGetController)
.controller('BeerEditController', BeerEditController)
.service('BeerService', BeerService)
;

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

  this.remove = function(beer){
    var httpRequest = {
          url: 'http://localhost:3000/api/beers/' + beer._id
        , method: 'DELETE'
        }
      ;
    return $http(httpRequest);
  }

  this.get = function(id){
    var httpRequest = {
          url: 'http://localhost:3000/api/beers/' + id
        , method: 'GET'
        }
      ;
    return $http(httpRequest);
  }

  this.create = function(beer) {
    var httpRequest = {
          url: 'http://localhost:3000/api/beers'
        , method: 'POST'
        , data: beer
        }
      ;
    return $http(httpRequest);
  }

  this.edit = function() {
    var httpRequest = {
      url: 'http://localhost:3000/api/beers/' + $routeParams.id
    , method: 'PUT'
    }
    return $http(httpRequest);
  }
};

// Injeção de dependências
BeerListController.$inject = ['$http'];

// Controllers
function BeerListController($scope, BeerService) {
  var httpRequest = {
        url: 'http://localhost:3000/api/beers'
      , method: 'GET'
      }
    ;

  BeerService
  .list()
  .success(function(data) {
    console.log('SUCESSO: ', data);
    $scope.beers = data;
    $scope.msg = 'Listagem feita com sucesso.';
  })
  .error(function(err) {
    console.log('ERRO: ', err);
    $scope.msg = 'Listagem não podde ser feita.';
  });

  $scope.remove = function(beer) {
    if(confirm('Deseja mesmo remover essa cerveja?')){
      BeerService
      .remove(beer)
      .success(function(data) {
        console.log('SUCESSO: ', data);
        var index = $scope.beers.indexOf(beer);
        $scope.beers.splice(index, 1);
        $scope.msg = 'Remoção feita com sucesso.';
      })
      .error(function(err) {
        console.log('ERRO: ', err);
        $scope.msg = 'Remoção não podde ser feita.';
      });
    }
    else {
      alert('UFA! Ainda bem!');
    }
  }
};

function BeerGetController($scope, $http, $routeParams) {

  var httpRequest = {
        url: 'http://localhost:3000/api/beers/' + $routeParams.id
      , method: 'GET'
      }
    ;

  $http(httpRequest)
  .success(function(data) {
    console.log('SUCESSO: ', data);
    $scope.beer = data;
    $scope.msg = 'Consulta feita com sucesso.';
  })
  .error(function(err) {
    console.log('ERRO: ', err);
    $scope.msg = 'Consulta não podde ser feita.';

  });
};

function BeerCreateController($scope, $http) {
  $scope.create = function(beer) {

    $http(httpRequest)
    .success(function(data) {
      console.log('SUCESSO: ', data);
      // $scope.beers = data;
      $scope.msg = 'Cadastro da cerveja feito com sucesso.';
    })
    .error(function(err) {
      console.log('ERRO: ', err);
      $scope.msg = 'Cadastro da cerveja não pode ser feito.';

    });
  }
};

function BeerEditController($scope, $http, $routeParams) {

  $http(httpRequest)
  .success(function(data) {
    console.log('SUCESSO: ', data);
    $scope.beer = data;
    $scope.msg = 'Consulta feita com sucesso.';
  })
  .error(function(err) {
    console.log('ERRO: ', err);
    $scope.msg = 'Consulta não podde ser feita.';

  });

  $scope.save = function(beer) {
    var httpRequest = {
          url: 'http://localhost:3000/api/beers/' + $routeParams.id
        , method: 'PUT'
        , data: beer
        }
      ;

    $http(httpRequest)
    .success(function(data) {
      console.log('SUCESSO: ', data);
      $scope.msg = 'Alteração feita com sucesso.';
    })
    .error(function(err) {
      console.log('ERRO: ', err);
      $scope.msg = 'Alteração não podde ser feita.';

    });
  }
};

// Injeção de dependências
BeerListController.$inject = ['$scope', 'BeerService'];
BeerCreateController.$inject = ['$scope', '$http'];
BeerGetController.$inject = ['$scope', '$http', '$routeParams'];
BeerEditController.$inject = ['$scope', '$http', '$routeParams'];





