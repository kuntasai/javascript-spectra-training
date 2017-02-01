var app = angular.module('studentApp', []);

app.controller('studentCntrl', ['$scope', function($scope) {
    $scope.msg = 'Student Info System';
    $scope.showMsg = false;

    $scope.setShowMsg = function() {
        $scope.showMsg = true;
    };
    $scope.schoolStudents = [{name: 'Deepak', roll: 1000, maths: 89, hindi: 100, eng: 78, gender: 'male', salary: 121212},
                      {name: 'Sai', roll: 1001, maths: 89, hindi: 90, eng: 68, gender: 'male', salary: 76898},
                      {name: 'Sarita', roll: 1002, maths: 78, hindi: 95, eng: 83, gender: 'female', salary: 57687},
                      {name: 'Gopi', roll: 1003, maths: 99, hindi: 69, eng: 78, gender: 'male', salary: 467588}];

    $scope.collegStudents = [{name: 'Harish', roll: 1004, maths: 89, hindi: 100, eng: 98, gender: 'male', salary: 190909},
                  {name: 'Leela', roll: 1005, maths: 89, hindi: 98, eng: 89, gender: 'male', salary: 4658}];

}]);