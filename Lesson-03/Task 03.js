var fruits = [ 'apple', 'pear', 'plum', 'peach', 'cherry', 'strawberry',
		'blueberry' ];

console.log('Array Fruits: ');
console.log( fruits);
function filterRange(array, a, b) {
	console.log('New array from element ' + a + ' to element ' + b);
	console.log(array.slice(a - 1, b));
}

filterRange(fruits, 3, 5);
console.log('--------------------------------------');



var myString = 'my-short-string';
function camelize(str) {
	var word = [];
	var array = str.split('-');
	for (var i = 0; i < array.length; i++) {
		var symbols = array[i].charAt(0).toUpperCase() + array[i].slice(1);
		word.push(symbols);
		var newWord = word.join('');
	}
	console.log(newWord.charAt(0).toLowerCase() + newWord.slice(1));
}

console.log(myString);
camelize(myString);