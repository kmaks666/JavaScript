var x = 32;
var y = 'd';
var typeOperation = "division";
var result;

function calculate(a, b, typeOper) {
	var result;
	try {
		if ((isNaN(a)) || (a.lenght === 0) || (isNaN(b)) || (b.lenght === 0)||(a==='')||(b==='')) {
			throw new Error("Incorrect values!");
		} else {
			if (typeOper == "addition") {
				result = a + b;
				console.log(a + " + " + b + " = " + result);
			} else if (typeOper == "subtraction") {
				result = a - b;
				console.log(a + " - " + b + " = " + result);
			} else if (typeOper == "myltiply") {
				result = a * b;
				console.log(a + " * " + b + " = " + result);
			} else if (typeOper == "division") {
				try {
					result = a / b;
					if (result === Infinity) {
						throw new Error("Division by zero.")
					} else {
						console.log(a + " / " + b + " = " + result);
					}
				} catch (err) {
					console.log(err);
				}
			}
		}
	} catch (err) {
		console.log(err);
	}
}

calculate(x, y, typeOperation);
