const sumArr = (arr) => {
	return arr.reduce((res, num) => res + num, 0);
}

const calcID = (arr, multipliers) => {

	const multi = (num, i) => num * multipliers[i];
	const sum = (num) => num > 9 ? num % 10 + 1 : num;

	const res = sumArr( arr.map(multi).map(sum) );
	return res % 10 === 0 ? 0 : 10 - res % 10;
}

const isEqual = (a, b) => {
	const keysA = Object.keys(a);
	const keysB = Object.keys(b).filter(key => !keysA.includes(key));

	for (let i = 0; i < keysA.length; i++) {
		const key = keysA[i];
		if (a[key] !== b[key]) {
			return false;
		};
	}

	for (let i = 0; i < keysB.length; i++) {
		const key = keysB[i];
		if (a[key] !== b[key]) {
			return false;
		};
	}

	return true;
}

export {
	calcID,
	isEqual,
};
