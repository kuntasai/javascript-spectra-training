var app = angular.module('studentApp', []);

app.controller('studentCntrl', ['$scope', function($scope) {
    $scope.msg = 'Student Info System';
    $scope.name = 'Sai';
    $scope.roll = 10009;
}]);