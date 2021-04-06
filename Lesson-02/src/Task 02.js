var employeeSalaries = {
	Ivan : 1000,
	Petro : 3000,
	Anna : 5000,
	Alina : 8000,
	Andrii : 12500
};
var sum = 0;
for ( var name in employeeSalaries) {
	console.log(name + "--->" + employeeSalaries[name] + " UAH");
	sum = sum + employeeSalaries[name];
}
console.log("-------------------")
console.log("Total:    " + sum + " UAH");