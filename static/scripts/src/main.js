var angular = require('angular');

angular.module('app', [
    'app.navbar',
    'app.home',
    'app.dashboard',
    'app.card',
    'app.config'
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
   .when('/dashboard/', {
      templateUrl: c.routes.dashboard.view,
      controller : 'DashboardCtrl',
   })
   .when('/config/', {
       templateUrl: c.routes.config.view,
       controller: 'ConfigCtrl',
   })
}

//Requires to allow webpack to bundle whole application
require('./home/home.js');
require('./dashboard/dashboard.js');
require('./navbar/navbar.js');
require('./card/card.js');
require('./config/config.js');
