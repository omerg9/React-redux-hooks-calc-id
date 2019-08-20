import React from 'react';

import { shallow, mount } from '../enzyme';
import { Provider } from '../Provider';

import Form from '../../containers/Form';

describe('Form tests', () => {

	it('renders Form', () => {
		const wrapper = shallow(
			<Provider>
				<Form />
			</Provider>
		);

		expect(wrapper.find('Form')).toBeDefined();
	});

	it('should jump focus on enter value', () => {
		const wrapper = mount(
			<Provider>
				<Form />
			</Provider>
		);

		const name = 'num1';
		const value = '8';

		wrapper.find('input[name="num1"]').simulate('change', {
			target: { name, value },
		});

		expect(wrapper
			.contains(<input name="num1" type="text" value="8" />)
		).toBeDefined();

		expect(wrapper.find('input[name="num2"]').is(':focus')).toBe(true);
	});

	it('should jump focus on clear value', () => {
		const wrapper = mount(
			<Provider>
				<Form />
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

		wrapper.find('input[name="num3"]').simulate('change', {
			target: { name: 'num3', value: '' },
		});

		expect(wrapper.find('input[name="num2"]').is(':focus')).toBe(true);
	});
});
