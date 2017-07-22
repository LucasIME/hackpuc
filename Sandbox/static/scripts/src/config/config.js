var angular = require('angular');

angular.module('app.config', ['ngRoute'])

.controller('ConfigCtrl', function($scope, $http){
    $scope.welcome_message = "Config Page";

    $scope.username = "Carolina";
    $scope.savePercentage = 0;

    angular.element(document).ready(function(){
        componentHandler.upgradeDom();
    });
});