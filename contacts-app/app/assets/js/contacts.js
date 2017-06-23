var contactsApp = angular.module('contactsModule', []);

contactsApp.controller("contactsController", function($scope, $http) {
	$scope.sortType     = 'firstName'; // set the default sort type
	$scope.sortReverse  = false;  // set the default sort order
	$scope.searchContacts   = '';     // set the default search/filter term
	$scope.displayAddPerson = false;
	
	$scope.message = "My Contacts";
	$http.get('/persons').then(function(response) {
		$scope.persons = response.data;
	});
	
	$scope.deletePerson = function(person) {
		if(confirm("Are you sure you want to delete \n\n" + person.firstName + "" + person.lastName + "\n\nfrom your records?")) {
			$http.post('/delete', person).then(function(response) {
				$http.get('/persons').then(function(response) {
					$scope.persons = response.data;
				});
			});
		}
	};
	
	$scope.search = function(person) {
	    if (!$scope.query || (person.firstName.toLowerCase().indexOf($scope.query) != -1 || 
	    		(person.lastName.toLowerCase().indexOf($scope.query.toLowerCase()) != -1) ) ||
	    			(person.email.toLowerCase().indexOf($scope.query.toLowerCase()) != -1) ) {
	        return true;
	    }
	    return false;
	};
});
