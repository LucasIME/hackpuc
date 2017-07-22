var angular = require('angular');
//import angular from 'angular';

function navBarController($scope) {
    $scope.headerList = [
        {
            text: "Home",
            url: "#!/"
        },
    ];
}

angular.module('app.navbar', [])

.component('navbar', {
templateUrl: 'static/scripts/src/navbar/navbar.html',
controller: navBarController
});