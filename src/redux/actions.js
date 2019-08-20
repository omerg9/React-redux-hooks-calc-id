const actions = {
	CHANGE_NUM: '[Form]: Change number',
	CHANGE_ERR: '[Form]: Change error',
	CHANGE_RES: '[Form]: Change result',

	changeNum: (name, value) => ({
		type: actions.CHANGE_NUM,
		payload: {
			name,
			value,
		},
	}),
	changeErr: (name, value) => ({
		type: actions.CHANGE_ERR,
		payload: {
			name,
			value,
		},
	}),
	changeRes: (value) => ({
		type: actions.CHANGE_RES,
		payload: {
			value,
		},
	}),
};

export default actions;
