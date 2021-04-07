var array=[7,56,-2,9,-3,-11,22,0,37,-43,
	11,8,-26,5,-4,29,3,-8,33,-32];

function alert(array){
	console.log(array);
	console.log('-------------------');
	}
console.log('Unsorted array:')
alert(array);
function sortingNumber(a,b){
	return a-b;
}

array.sort(sortingNumber);
console.log('Sorted by increasing values:')
alert(array);

array.reverse();
console.log('Sorted by descending values:')
alert(array);

var arrayPositive=[];
var arrayNegative=[];
for(var i=0;i<array.length;i++){
	if(array[i]>=0){
		arrayPositive.push(array[i]);
	}
	else {
		arrayNegative.push(array[i]);
	}
}
console.log('Array of positive values:');
alert(arrayPositive);
console.log('Array of negative values:');
alert(arrayNegative);