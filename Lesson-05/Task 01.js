function makeBuffer() {
	var stringBuffer = '';
	return {
		addToBuffer : function(someString) {
			stringBuffer += someString;
		},
		printBuffer : function() {
			console.log(stringBuffer);

		},
		clearBuffer : function() {
			stringBuffer = '';
		}
	}
}
var buffer = makeBuffer();
buffer.addToBuffer('I ');
buffer.printBuffer();
buffer.addToBuffer('need ');
buffer.printBuffer();
buffer.addToBuffer('study ');
buffer.printBuffer();
buffer.addToBuffer('Java');
buffer.printBuffer();
buffer.addToBuffer('Script!');
buffer.printBuffer();
buffer.clearBuffer();
buffer.printBuffer();


buffer.addToBuffer('LOGOS ');
buffer.printBuffer();
buffer.addToBuffer('IT ');
buffer.printBuffer();
buffer.addToBuffer('Academy.');
buffer.printBuffer();
buffer.clearBuffer();
buffer.printBuffer();