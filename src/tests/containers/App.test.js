import React from 'react';

import { mount, shallow } from '../enzyme';
import { Provider } from '../Provider';

import App from '../../containers/App';

describe('App tests', () => {

	it('renders App', () => {
		const wrapper = shallow(
			<Provider>
				<App />
			</Provider>
		);

		expect(wrapper.find('App')).toBeDefined();
	});

	it('should not calculate result for partial data', () => {
		const wrapper = mount(
			<Provider>
				<App />
			</Provider>
		);

		wrapper.find('input[name="num1"]').simulate('change', {
			target: { name: 'num1', value: 8 },
		});
		wrapper.find('input[name="num2"]').simulate('change', {
			target: { name: 'num2', value: 2 },
		});
		wrapper.find('input[name="num3"]').simulate('change', {
			target: { name: 'num3', value: 6 },
		});

		expect(wrapper.contains(<input name="num1" type="text" value="8" />)).toBeDefined();
		expect(wrapper.contains(<input name="num2" type="text" value="2" />)).toBeDefined();
		expect(wrapper.contains(<input name="num3" type="text" value="6" />)).toBeDefined();

		expect(wrapper
			.find('.result')
			.contains(<input name="result" readOnly type="text" value="" />)
		).toBeDefined();
	});

	it('should calculate result for full data', () => {
		const wrapper = mount(
			<Provider>
				<App />
			</Provider>
		);

		wrapper.find('input[name="num1"]').simulate('change', {
			target: { name: 'num1', value: 8 },
		});
		wrapper.find('input[name="num2"]').simulate('change', {
			target: { name: 'num2', value: 2 },
		});
		wrapper.find('input[name="num3"]').simulate('change', {
			target: { name: 'num3', value: 6 },
		});
		wrapper.find('input[name="num4"]').simulate('change', {
			target: { name: 'num4', value: 9 },
		});
		wrapper.find('input[name="num5"]').simulate('change', {
			target: { name: 'num5', value: 4 },
		});
		wrapper.find('input[name="num6"]').simulate('change', {
			target: { name: 'num6', value: 6 },
		});
		wrapper.find('input[name="num7"]').simulate('change', {
			target: { name: 'num7', value: 3 },
		});
		wrapper.find('input[name="num8"]').simulate('change', {
			target: { name: 'num8', value: 1 },
		});

		expect(wrapper.contains(<input name="num1" type="text" value="8" />)).toBeDefined();
		expect(wrapper.contains(<input name="num2" type="text" value="2" />)).toBeDefined();
		expect(wrapper.contains(<input name="num3" type="text" value="6" />)).toBeDefined();
		expect(wrapper.contains(<input name="num4" type="text" value="9" />)).toBeDefined();
		expect(wrapper.contains(<input name="num5" type="text" value="4" />)).toBeDefined();
		expect(wrapper.contains(<input name="num6" type="text" value="6" />)).toBeDefined();
		expect(wrapper.contains(<input name="num7" type="text" value="3" />)).toBeDefined();
		expect(wrapper.contains(<input name="num8" type="text" value="1" />)).toBeDefined();

		expect(wrapper
			.find('.result')
			.contains(<input name="result" readOnly type="text" value="1" />)
		).toBeDefined();
	});
});
