var app = angular.module('studentApp');

app.filter('salutation', function() {
    return function(input, gender) {
        if(gender === 'male') {
            return 'Mr.' + input;
        }
        else if(gender == 'female') {
            return 'Miss.' + input;
        }
    }
});