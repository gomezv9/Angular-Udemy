(function(){

var app = angular.module('ejemplosApp', ['restangular'])
.config(function(RestangularProvider){
	RestangularProvider.setBaseUrl('http://jsonplaceholder.typicode.com/');
});

app.controller('MainCtrl', function($scope, Restangular) {
	console.log("entro");

    $scope.users =  Restangular.all('users').getList().$object;
});

})();
