var contactsApp = angular.module('contactsModule', []);

contactsApp.controller("contactsController", function($scope, $http) {
	$scope.message = "My Contacts";
	$http.get('/persons').then(function(response) {
		$scope.persons = response.data;
	});

	$scope.chart = {
		object : []
	};

	$scope.selectedObjectIndex = null;

	$scope.selectObject = function($index) {
		$scope.selectedObjectIndex = $index;
		document.getElementById("button").innerHTML = "Delete Person";
		document.getElementById("contactForm").action = "/delete";

	};
	
	$scope.deletePerson = function(person) {
		if(confirm("Are you sure you want to delete " + person.firstName + " " + person.lastName + " from your records?")) {
			$http.post('/delete', person).then(function(response) {
				$http.get('/persons').then(function(response) {
					$scope.persons = response.data;
				});
			});
		}
	};
});