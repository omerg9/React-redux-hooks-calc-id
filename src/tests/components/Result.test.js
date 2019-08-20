import React from 'react';

import { shallow } from '../enzyme';
import { Provider } from '../Provider';

import Result from '../../components/Result';

describe('Result tests', () => {

	it('renders Result', () => {
		const wrapper = shallow(
			<Provider>
				<Result />
			</Provider>
		);

		// Expect the wrapper object to be defined
		expect(wrapper.find('.result')).toBeDefined();
	});

	it('Result with value', () => {
		const store = {
			result: '8',
		}
		const wrapper = shallow(
			<Provider store={store}>
				<Result />
			</Provider>
		);

		expect(wrapper
			.find('.result')
			.contains(<input name="result" readOnly type="text" value="8" />)
		).toBeDefined();
	});
});
