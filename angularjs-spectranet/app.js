var module = angular.module('helloApp', []);
module.controller('helloCntrl', ['$scope', function($scope) {
    $scope.msg = 'Hello from AngularJS again';
}]);
