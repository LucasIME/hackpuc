var angular = require('angular');

angular.module('app.config', ['ngRoute'])

.controller('ConfigCtrl', function($scope, $http){
    $scope.welcome_message = "Config Page";
});