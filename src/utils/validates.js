const validateNum = (num) => {
	if (/^[0-9]$/gi.test(num)) {
		return null;
	}

	return 'Input must be a number';
};

export {
	validateNum,
};
