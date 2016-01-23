var expect = require('chai').expect;
var getNames = require('./index');

describe('get-names', function(){
	describe('all', function() {
		it('should be an array of strings', function() {
			expect(getNames.all).to.satisfy(isArrayOfStrings);

			function isArrayOfStrings(array) {
				return array.every(function(item) {
					return typeof item === 'string';
				});
			}
		});

		it('should contain Adi', function() {
			expect(getNames.all).to.include('Adi');
		});
	});

	describe('random', function() {
		it('should return a random item form the getNames.all', function() {
			var randomItem = getNames.random();
			expect(getNames.all).to.include(randomItem);
		});
		it('should return an array of random items if passed in a number', function() {
			var randomItems = getNames.random(2);
			expect(randomItems).to.have.length(2);

			randomItems.forEach(function(item) {
				expect(getNames.all).to.include(item);
			});
		});

	});
});