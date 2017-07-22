var angular = require('angular');

angular.module('app', [
    'app.navbar',
    'app.home'
])

.config(routesConfig);

require('./constants.js');

routesConfig.$inject = ['$routeProvider', 'constants'];

function routesConfig($routeProvider, c){
    console.log(c);
   $routeProvider
   .when('/', {
      templateUrl: c.routes.home.view,
      controller : 'HomeCtrl',
   })
}

//Requires to allow webpack to bundle whole application
require('./home/home.js');
require('./navbar/navbar.js');

