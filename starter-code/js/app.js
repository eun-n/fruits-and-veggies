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

		$scope.makeMidF = function(c) {
		$scope.middle.push(c);
		for(var i=0; i<$scope.fruity.length; i++) {
			if($scope.fruity[i]===c) {
				$scope.fruity.splice(i, 1);
			}
		}
  		c= '';
	}


		$scope.makeMidV = function(d) {
		$scope.middle.push(d);
		for(var i=0; i<$scope.vegy.length; i++) {
			if($scope.vegy[i]===d) {
				$scope.vegy.splice(i, 1);
			}
		}
  		d= '';
	}
  }]);