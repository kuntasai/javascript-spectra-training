angular.module('studentApp').directive('studentList', function() {
	return {
        templateUrl: 'student.html',
		replace: true,
		scope: {
			students: '='
        }
    };
});