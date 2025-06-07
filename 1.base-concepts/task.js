"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	var discriminant = b * b - 4 * a * c;
	if (a === 0 && b !== 0) {
		const root = -c / b;
		arr.push(root);
	} else if (a === 0 && b === 0 && c !== 0) {
		return arr;
		arr.push(root);
	} else if (discriminant < 0) {
		return arr;
		arr.push(root);
	} else if (discriminant === 0) {
		const root = -b / (2 * a);
		arr.push(root);
	} else {
		const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		arr.push(root1, root2);
	}
	return arr;
}

console.log(solveEquation(1, 3, 4));
console.log(solveEquation(22, 44, 33));
console.log(solveEquation(22, -55, 33));

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	if (countMonths <= 0 || amount <= 0 || percent < 0 || contribution < 0 || contribution > amount) {
		return 'Проверьте корректность введенных данных'
	} else {
		const p = percent / 100 / 12;
		const a = amount - contribution;
		const summ = ((a * (p + (p / (((1 + p) ** countMonths) - 1)))))*countMonths;
    let roundedSumm = Math.round(summ*100)/100;
    return roundedSumm;
	}
}

console.log(calculateTotalMortgage(10, 0, 50000, 12));
console.log(calculateTotalMortgage(10, 1000, 50000, 12));
console.log(calculateTotalMortgage(10, 0, 20000, 24));
console.log(calculateTotalMortgage(10, 1000, 20000, 24));
console.log(calculateTotalMortgage(10, 20000, 20000, 24));
console.log(calculateTotalMortgage(10, 0, 10000, 36));
console.log(calculateTotalMortgage(15, 0, 10000, 36));