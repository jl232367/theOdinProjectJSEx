function add (num1, num2) {
	return num1 + num2; 
}

function subtract (num1, num2) {
	return num1 - num2; 
}

function sum (arys) {
	//let total = 0;
	const sumTotal = arys.reduce((total, ary) => {
		return total + ary;
	}, 0);
	//for (let index = 0; index < Array.from(arguments).length; index++) {
		//total = total = Array.from(arguments)[index];
		
	//}
	return sumTotal;
	//const total = ar
}

function multiply (arys) {
	const mulTotal = arys.reduce((total, ary) => {
		return total * ary;
	}, 1);

	return mulTotal;
}

function power(base, power) {
		let runTotal = base
		for (let i = 0; i <= power - 2; i++) {
			runTotal = runTotal * base;
		}
		return runTotal;

}

function factorial(num) {
	let runTotal = num;
	if (num === 0) {
		return 1;
	} else {
		for (let i = 1; i <= num - 1; i++) {
			runTotal = runTotal * i; 
		}
		return runTotal;
	}
	
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}