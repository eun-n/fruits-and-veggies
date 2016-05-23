/* setup your angular app here */

//debug stuff to show the app is loading and fruit / veggies are available

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

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
$scope.middle = shuffle($scope.fruits.concat($scope.vegetables));

$scope.fruity = [];
$scope.vegy = [];

$scope.win=false;

$scope.checkwin = function() {
	if ($scope.fruity.sort().toString() == $scope.fruits.sort().toString() && $scope.vegy.sort().toString() == $scope.vegetables.sort().toString()) {
			$scope.win=true;
	}
}

$scope.makeFruit = function(a) {
		$scope.fruity.push(a);
		for(var i=0; i<$scope.middle.length; i++) {
			if($scope.middle[i]===a) {
				$scope.middle.splice(i, 1);
			}
		} if($scope.fruits.indexOf(a) == -1) {
			$scope.className = "red";
		}
  		a= '';
	}

	$scope.makeVeg = function(b) {
		$scope.vegy.push(b);
		for(var i=0; i<$scope.middle.length; i++) {
			if($scope.middle[i]===b) {
				$scope.middle.splice(i, 1);
			}
		}if($scope.vegetables.indexOf(b) == -1) {
			$scope.className = "red";
		}
  		b= '';
	}

		$scope.makeMidF = function(c) {
		$scope.middle.push(c);
		for(var i=0; i<$scope.fruity.length; i++) {
			if($scope.fruity[i]===c) {
				$scope.fruity.splice(i, 1);
			}
		} $scope.className = "white";
  		c= '';
	}


		$scope.makeMidV = function(d) {
		$scope.middle.push(d);
		for(var i=0; i<$scope.vegy.length; i++) {
			if($scope.vegy[i]===d) {
				$scope.vegy.splice(i, 1);
			}
		} $scope.className = "white";
  		d= '';
	}

  }]);