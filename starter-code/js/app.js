/* setup your angular app here */

//debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruit.length);
console.log('Veggie count', vegetables.length);

var fruitsandvegs = angular.module('FruitsnVegs', []);

fruitsandvegs.controller('HomeCtrl', ['$scope', function($scope) {

$scope.fruits = [
  'Apple',
  'Apricot',
  'Banana'
  ];

$scope.vegetables = [
  'Artichoke',
  'Arugula',
  'Asparagus'
  ];

$scope.show = true;

$scope.middle = $scope.fruits.concat($scope.vegetables);

	$scope.fruity = [];

$scope.makeFruit = function(a) {
		$scope.fruity.push(a);
		for(var i=0; i<$scope.middle.length; i++) {
			if($scope.middle[i]===a) {
				$scope.middle.splice(i, 1);
			}
		}
  		a= '';
	}

	$scope.vegy = [];

	$scope.makeVeg = function(b) {
		$scope.vegy.push(b);
		for(var i=0; i<$scope.middle.length; i++) {
			if($scope.middle[i]===b) {
				$scope.middle.splice(i, 1);
			}
		}
  		b= '';
	}
  }]);