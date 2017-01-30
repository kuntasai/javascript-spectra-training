var app = angular.module('studentApp');

app.factory('studentService', [function() {
    var service = {
        getTotalMarks: function(student) {
            return (student.hindi + student.eng + student.maths);
        }
    };
    return service;
}]);