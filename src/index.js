import uniqueRandomArray from 'unique-random-array';
import characterNames from './names.json';

var getRandomItem = uniqueRandomArray(characterNames);

module.exports = {
	all: characterNames,
	random: random
};

function random (number) {
	// body...
	if(number === undefined){
		return getRandomItem();
	} else {
		var randomItems = [];
		
		for (var i = 0; i < number; i++) {
			randomItems.push(getRandomItem());
		}
		return randomItems;
	}
}

