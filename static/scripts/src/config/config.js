var angular = require('angular');

angular.module('app.config', ['ngRoute'])

.controller('ConfigCtrl', function($scope, $http){
    $scope.welcome_message = "Config Page";

    $scope.username = "Carolina";
    $scope.savePercentage = 0;

    // Data 
    $scope.balance = 0;
    $http.get('/balance')
        .then(function (response) {
            $scope.balance = response.data.balance;
        });
    $scope.projected = 0;
    $http.get('/projected')
        .then(function (response) {
            $scope.projected = response.data.projected;
        });

    angular.element(document).ready(function(){
        componentHandler.upgradeDom();
    });
});