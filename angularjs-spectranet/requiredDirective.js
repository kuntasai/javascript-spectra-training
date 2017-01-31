
angular.module('studentApp').directive('required', function() {
	return function(scope, element) {
		$(element).parents("tr").children(":nth-child(1)").append("<span style='color: red'><strong>*</strong></span>");
	};
});