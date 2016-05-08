app.config( function($routeProvider){

	$routeProvider
		.when('/',{
			templateUrl: 'Partials/home.html',
			controller: 'homeCtrl'
		})
		.when('/profesores',{
			templateUrl: 'Partials/profesores.html',
			controller: 'profesoresCtrl'
		})
		.when('/alumnos',{
			templateUrl: 'Partials/alumnos.html',
			controller: 'alumnosCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});

});