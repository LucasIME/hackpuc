var angular = require('angular');
var Highcharts = require('highcharts');
var colors = Highcharts.getOptions().colors;
require('highcharts-ng');

angular.module('app.dashboard', ['ngRoute', 'highcharts-ng'])

.controller('DashboardCtrl', function($scope, $http){
    var vm = this;

    $scope.username = "Carolina";

    // Data 
    $scope.portfolio = []
    $http.get('/portfolio')
        .then(function (response) {
            $scope.portfolio = response.data.portfolio;
            updateTreasuryDonut();
        });
    
    // Data Transforms
    $scope.getPortifolioTotalValue = function () {
        total = 0.0;
        for (i = 0; i < $scope.portfolio.length; i += 1) {
            total += $scope.portfolio[i].value;
        }
        return total;
    }
    
    // Treasury Donut
    function updateTreasuryDonut() {
        $scope.treasuryDonutConfig.series[0].data = aggregate($scope.portfolio);
        $scope.treasuryDonutConfig.series[1].data = drilldown($scope.portfolio);
    }
    function getTreasuryColor(name) {
        if (~name.indexOf('(LTN)')) {
            return '#99d8c9';
        }
        if (~name.indexOf('(LFT)')) {
            return '#238b45';
        }
        if (~name.indexOf('(NTNB Princ)')) {
            return '#41ae76';
        }
        if (~name.indexOf('(NTNB)')) {
            return '#cc4c02';
        }
        if (~name.indexOf('(NTNF)')) {
            return '#66c2a4';
        }
        console.log(name)
    }
    function aggregate(portfolio) {
        categories = ['(LTN)', '(LFT)', '(NTNB)', '(NTNB Princ)', '(NTNF)'];
        total = $scope.getPortifolioTotalValue();

        data = [];
        for (i = 0; i < categories.length; i += 1) {
            assets = portfolio.filter(function (asset) {return ~asset.name.indexOf(categories[i])});
            subtotal = 0.0;
            for (j = 0; j < assets.length; j += 1) {
                subtotal += assets[j].value;
            }
            data.push({
                name: categories[i].substring(1, categories[i].length-1),
                y: (subtotal / total),
                color: getTreasuryColor(categories[i])
            });
        }
        return data
    }
    function drilldown(portfolio) {
        categories = ['(LTN)', '(LFT)', '(NTNB)', '(NTNB Princ)', '(NTNF)'];
        total = $scope.getPortifolioTotalValue();

        ordered_portfolio = [];
        for (i = 0; i < categories.length; i += 1) {
            ordered_portfolio = ordered_portfolio.concat(
                portfolio.filter(function (asset) {return ~asset.name.indexOf(categories[i])})
            );
        }

        data = []
        for (i = 0; i < ordered_portfolio.length; i += 1) {
            data.push({
                name: ordered_portfolio[i].name,
                y: (ordered_portfolio[i].value / total),
                color: getTreasuryColor(ordered_portfolio[i].name)
            })
        }
        return data
    }
    $scope.treasuryDonutConfig = {
        chart: {
            type: 'pie'
        },
        title: {
            text: null
        },
        plotOptions: {
            pie: {
                shadow: false,
                center: ['50%', '50%']
            }
        },
        tooltip: {
            valueSuffix: '%',
            formatter: function () {
                return this.y > 0.01 ? '<b>' + this.point.name + ':</b> ' +
                    (this.y*100).toFixed(2) + '%' : null;
            }
        },
        series: [
            {
                name: "Treasury Overall",
                data: aggregate($scope.portfolio),
                size: '60%',
                dataLabels: {
                    formatter: function () {
                        return this.y > 0 ? this.point.name : null;
                    },
                    color: '#ffffff',
                    distance: -30
                }
            }, {
                name: "Treasury Drilldown",
                data: drilldown($scope.portfolio),
                size: '80%',
                innerSize: '60%',
                dataLabels: {
                    formatter: function () {
                        return this.y > 1 ? '<b>' + this.point.name + ':</b> ' +
                            this.y.toFixed(2) + '%' : null;
                    }
                },
                id: 'drilldown'
            }
        ],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 400
                },
                chartOptions: {
                    series: [{
                        id: 'drilldown',
                        dataLabels: {
                            enabled: false
                        }
                    }]
                }
            }]
        }
    };

    angular.element(document).ready(function(){
        componentHandler.upgradeDom();
    });
});
