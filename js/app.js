(function() {
	var app = angular.module('store', []);
	
	app.controller('StoreCtrl', function($scope, $http) {
		$http.get('data/products.json').then(function(res) {
			$scope.products = res.data;
		});
		
		$scope.submitForm = functio(isValid) {
			if (isValid) {
				alert('form validation works');
			}
		};
	});

	app.controller('PanelController', function() {
		this.tab = 1;
		
		this.selectTab = function(setTab) {
			this.tab = setTab;
		};
		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};
	});

	app.controller('ReviewController', function() {
		this.review = {};

		this.addReview = function(product) {
			product.reviews.push(this.review);
			this.review = {};
		};
	});
	
})();