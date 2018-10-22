var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'pages/main.html',
            controller: 'mainController'
        })

        .when('/second', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        })

});

myApp.controller('mainController', ['$scope', '$log', function ($scope, $log) {

    $scope.people = [
        {
            title: "Primo titolo",
            subtitle: "Primo sottotitolo",
            description: "Prima descrizione",
            link: "Primo link"
        },
        {
            title: "Secondo titolo",
            subtitle: "Secondo sottotitolo",
            description: "Seconda descrizione",
            link: "Secondo link"
        },
        {
            title: "Terzo titolo",
            subtitle: "Terzo sottotitolo",
            description: "Terza descrizione",
            link: "Terzo link"
        },
        {
            title: "Quarto titolo",
            subtitle: "Quarto sottotitolo",
            description: "Quarta descrizione",
            link: "Quarto link"
        }
    ]

}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function ($scope, $log, $routeParams) {


}]);

myApp.directive("searchResult", function () {
    return {
        restrict: 'AECM',
        templateUrl: 'directives/searchresult.html',
        replace: true,
        scope: {
            personObject: "=",
        }
    }
});
