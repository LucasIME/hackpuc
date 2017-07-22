var angular = require('angular');
require('highcharts-ng');

angular.module('app.dashboard', ['ngRoute', 'highcharts-ng'])

.controller('DashboardCtrl', function($scope, $http){
    var vm = this;

    $scope.username = "Carolina";

    // Porftolio 
    $scope.portfolio = []
    $http.get('/portfolio')
        .then(function (response) {
            $scope.portfolio = response.data.portfolio;

            // Update Stuff
            updateTreasuryDonut($scope.portfolio);
        });
    
    // Treasury Donut
    function updateTreasuryDonut(portfolio) {
        $scope.treasuryDonutConfig.series[0].data = drilldown($scope.portfolio);
    }
    $scope.treasuryDonutConfig = {
        chart: {
            type: 'pie'
        },
        title: {
            text: "Treasury Donut"
        },
        plotOptions: {
            pie: {
                shadow: false,
                center: ['50%', '50%']
            }
        },
        series: [{
            name: "Treasury Drilldown",
            data: drilldown($scope.portfolio),
            size: '80%',
            innerSize: '60%',
        }]
    };

    angular.element(document).ready(function(){
        componentHandler.upgradeDom();
    });
});

function drilldown(portfolio) {
    data = []
    for (i = 0; i < portfolio.length; i += 1) {
        data.push({
            name: portfolio[i].name,
            y: portfolio[i].quantity,
        })
    }
    return data
}
