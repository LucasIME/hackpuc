var angular =  require('angular');

function treasuryDonutController($scope) {
    $scope.portfolio = [
        {
            name: "Tesouro Selic 2021 (LFT)",
            quantity: 0.21,
            applied: 1431.64,
            valued: 1881.48
        },
        {
            name: "Tesouro Prefixado 2021 (LTN)",
            quantity: 2.47,
            applied: 1236.83,
            valued: 1806.11
        },
        {
            name: "Tesouro Prefixado 2018 (LTN)",
            quantity: 1.57,
            applied: 1137.48,
            valued: 1514.64
        },
        {
            name: "Tesouro IPCA+ 2019 (NTNB Princ)",
            quantity: 0.37,
            applied: 761.81,
            valued: 1032.75
        },
        {
            name: "Tesouro IPCA+ com Juros Semestrais",
            quantity: 0.13,
            applied: 347.02,
            valued: 419.99
        }
    ]
}


angular.module('app.treasurydonut', [])
    .component('treasurydonut', {
        templateUrl: 'static/scripts/src/treasurydonut/treasurydonut.html',
        controller: treasuryDonutController
    });