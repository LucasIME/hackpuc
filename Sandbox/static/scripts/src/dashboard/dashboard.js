var angular = require('angular');
//import angular from 'angular';

angular.module('app.dashboard', ['ngRoute'])

.controller('DashboardCtrl', function($scope, $http){
    var self = this;

    $scope.portfolio = [
        {
            "name": "Dummy",
            "quantity": 1.00,
            "applied": 1000.00,
            "valued": 1001.00
        }
    ]
    $http.get(
        '/portfolio',
        function (response) {
            $scope.portfolio = response.data;
        }
    );

    angular.element(document).ready(function(){
        componentHandler.upgradeDom();
    });
});
