(function(){

var app = angular.module('universidadApp',[ ]);

app.controller('listadoCtrl', ['$scope', function($scope){
	
		$scope.listado = ["Fernando Herrera", "Jaime Gómez"];

		$scope.listadoProfesores = {
			profesores: [{

				nombre: "Fernando Herrera",
				edad: 30,
				clase: "PEE"

			},
			{

				nombre: "Jaime Gómez",
				edad: 29,
				clase: "ICE"

			}]
		}

}]);


})();
