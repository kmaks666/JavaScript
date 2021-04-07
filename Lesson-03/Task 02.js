var style = [ 'Jazz', 'Blues' ];
showStyle(style);

console.log('Added new element:');
style.push('Rock-n-Roll');
showStyle(style);

console.log('Replacement of the penultimate element:');
style.splice(-2, 1, 'Classic');
showStyle(style);

console.log('Deleted first element:');
console.log(style.shift());
showStyle(style);

console.log('Added two elements to the beginning:');
style.unshift('Rap', 'Reggi');
showStyle(style);

function find(array, value) {
	if (array.indexOf(value) !== -1) {
		console.log('Numder element ' + value + ' is: ');
		console.log(array.indexOf(value));
	} else {
		console.log(array.indexOf(value));
		console.log('Such an element as ' + value + ' does not exist');
	}
}

find(style, 'HeavyMetal');
showStyle(style);

function showStyle(array) {
	console.log(array);
	console.log('__________________________________________________');
}