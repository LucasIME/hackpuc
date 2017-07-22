var angular =  require('angular');
var Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);

var colors = Highcharts.getOptions().colors;

function drilldown(portfolio) {
    data = []
    for (i = 0; i < portfolio.length; i += 1) {
        data.push({
            name: 'a',
            y: portfolio[i].quantity,
            color: colors[0]
        })
    }
    return data
}

function treasurydonut(scope, element) {
    console.log(drilldown(scope.portfolio))
    Highcharts.chart(element[0], {
        chart: {
            type: 'pie'
        },
        title: 'Treasury Donut',
        plotOptions: {
            pie: {
                shadow: false,
                center: ['50%', '50%']
            },
            series: [{
                name: "Treasury Drilldown",
                data: drilldown(scope.portfolio),
                size: '80%',
                innerSize: '60%',
            }]
        }
    });
}

angular.module('app.treasurydonut', [])
    .directive('treasurydonut', function () {
        return {
            restrict: 'E',
            template: '<div></div>',
            scope: {
                portfolio: '='
            },
            link: treasurydonut
        }
    });